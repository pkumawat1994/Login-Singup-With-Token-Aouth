import axios from "axios";
import { useNavigate } from "react-router-dom";

import { POST_LOGIN } from "./types";

const LoginAction = (data) => {
  console.log(data);
  const body = {
    user: {
      email: data.email,
      password: data.password,
    },
  };
  return (dispatch) => {
    return axios
      .post("https://react-rails-api-demo.herokuapp.com/api/v1/signin", body)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: POST_LOGIN, payload: res.data });
      })
   

      .catch((error) => console.log(console.error));
  };
};
export default LoginAction;
