import * as React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Chip,
} from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function RecipeReviewCard(props) {
  console.log(props);
  console.log(props.item.images[0]);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "jgec",
    },
  });
  const img = cld.image(props.item.images[0]?.cloudinary_id);
  const uri = img.toURL();
  console.log(uri);
  return (
    <Card sx={{ width: 345, m: 1 }}>
      <CardHeader
        title={props.item.name}
        subheader={new Date(props.item.createdAt).toDateString()}
      />
      <CardMedia component="img" height="194" src={uri} alt={props.item.name} />
      <CardContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {props.item.ingredients.map((ingredient, index) => (
          <Chip
            key={index}
            label={ingredient}
            sx={{
              m: 0.25,
              color: "white",
            }}
            color="success"
          ></Chip>
        ))}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton
          color="warning"
          aria-label="share"
          onClick={() => {
            let printer = window.open("", "PRINT");
            printer.document.write(`
          <html>
          <head>
          <title>${props.item.name}</title>
          </head>
          <body style="display:flex;font-size:larger;flex-direction:column;align-items:center">
          <h1>${props.item.name}</h1>
          <p>${props.item.description}</p>
          <img src="${uri}" style="height:300;width:300" alt="${
              props.item.name
            }"/>
            <h4>Ingredients</h4>
          <p>${props.item.ingredients.join(", ")}</p>
          <h4>Steps</h4>
          <p>${props.item.steps.join("\n")}</p>
          </body>
          </html>
          `);

            setTimeout(() => {
              printer.document.close();
              printer.focus();
              printer.print();
            }, 250);
          }}
        >
          <DownloadIcon />
        </IconButton>
        <IconButton
          aria-label="edit"
          disabled={props.currentUid !== props.item.userId}
          color={props.currentUid === props.item.userId ? "primary" : "default"}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/editRecipe/${props.item._id}`}
          >
            <EditIcon />
          </Link>
        </IconButton>
        <IconButton
          sx={{
            color: "brown",
          }}
        >
          <Link style={{ color: "brown" }} to={"/recipe/" + props.item._id}>
            <OpenInNewIcon />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
