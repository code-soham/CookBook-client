import { Box, Chip, Paper, Typography,Button } from "@mui/material";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState, useEffect } from "react";
import ResponsiveAppBar from "../comp/Appbar";
import axios from "axios";
export default function Recipe(props) {
  const { id } = useParams();
  const [data, setData] = useState();
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      url: process.env.REACT_APP_API + "recipe/",
      data: {
        id,
      },
    })
      .then((res) => {
        setData(res.data.recipe);
        console.log(props.uid._id)
        console.log(res.data.recipe.userId)
        res.data?.recipe.images.map((img) => {
          let cld = new Cloudinary({
            cloud: {
              cloudName: "jgec",
            },
          });
          console.log(cld.image(img.cloudinary_id).toURL());
          imgs.push(cld.image(img.cloudinary_id).toURL());
        });
        // console.log(imgs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Box
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#cc5577",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23ce5776' x='10' width='11' height='11'/%3E%3Crect fill='%23d05a76' y='10' width='11' height='11'/%3E%3Crect fill='%23d15c75' x='20' width='11' height='11'/%3E%3Crect fill='%23d35f74' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d46174' y='20' width='11' height='11'/%3E%3Crect fill='%23d66473' x='30' width='11' height='11'/%3E%3Crect fill='%23d76673' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d96972' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23da6c72' y='30' width='11' height='11'/%3E%3Crect fill='%23db6e71' x='40' width='11' height='11'/%3E%3Crect fill='%23dc7171' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23dd7471' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23de7671' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23df7971' y='40' width='11' height='11'/%3E%3Crect fill='%23e07c71' x='50' width='11' height='11'/%3E%3Crect fill='%23e17e71' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23e28171' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23e38471' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23e38771' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23e48972' y='50' width='11' height='11'/%3E%3Crect fill='%23e58c72' x='60' width='11' height='11'/%3E%3Crect fill='%23e58f73' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23e69173' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23e69474' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23e79775' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23e79a75' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23e89c76' x='70' width='11' height='11'/%3E%3Crect fill='%23e89f77' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23e8a278' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23e9a47a' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23e9a77b' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23e9aa7c' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23e9ac7e' x='80' width='11' height='11'/%3E%3Crect fill='%23eaaf7f' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23eab281' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23eab482' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23eab784' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23eaba86' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ebbc88' x='90' width='11' height='11'/%3E%3Crect fill='%23ebbf8a' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ebc18c' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ebc48e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23ebc790' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23ebc992' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23ebcc94' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23ebce97' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23ebd199' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23ecd39c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23ecd69e' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23ecd8a1' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23ecdba4' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23ecdda6' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23ece0a9' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23ede2ac' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23ede4af' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23ede7b2' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23ede9b5' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23eeecb8' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ResponsiveAppBar />
      <Paper sx={{ m: 1, p: 1 }}>
        <Typography variant="h4" component="h3">
          {data?.name}
        </Typography>
        <Typography>{new Date(data?.createdAt).toDateString()}</Typography>
      </Paper>
      <Paper sx={{ m: 1, p: 1 }}>
        <Typography variant="body1" component="h3" color="text.secondary">
          {data?.description}
        </Typography>
      </Paper>
      <Paper sx={{ m: 1, p: 1, display:'flex',backgroundColor:'#ffffff00', justifyContent:'space-around', flexWrap:"wrap" }}>
        {imgs?.map((img, index) => (
          <img key={index} alt={data?.name} src={img} style={{
            width: "250px",
            height: "250px",
            borderRadius: "25px",
            padding:'10px',
            backgroundColor:'#fff',
            margin:'5px',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`
          }} />
        ))}
      </Paper>
      <Paper sx={{ m: 1, p: 1 }}>
        {data?.ingredients.map((ingredient, index) => (
          <Chip
            key={index}
            color="success"
            sx={{ width: "fit-content", m: 2 }}
            label={ingredient}
          ></Chip>
        ))}
        <Typography variant="h6">STEPS :</Typography>
        {data?.steps.map((step, index) => (
          <Typography key={index}>
            {index + 1}.{step}
          </Typography>
        ))}
      </Paper>
      <Button disabled={props.uid._id!==data?.userId} variant="contained" sx={{
        m: 2,
        p: 1,
        width:'fit-content',
        
      }}>
        <Link style={{
          textDecoration: "none",
          color:'white'
        }} to={"/editRecipe/"+data?._id}>EDIT RECIPE</Link>
      </Button>
    </Box>
  );
}
