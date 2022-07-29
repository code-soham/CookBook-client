import axios from "axios";
export default function authLogin(props) {
  console.log(process.env)
  axios({
    method: "post",
    url: process.env.REACT_APP_API + "auth/",
    data: {
      email: props.email,
      password: props.password,
    },
  })
    .then(function (response) {
      console.log(response);
      if(response.status!==200)alert("Wrong email or password");
      props.setAuthenticated(response.status===200?true:false);
      props.setUid(response.data.uid);
    })
    .catch(function (error) {
      console.log(error);
      alert("Login Failed");
    });
}
