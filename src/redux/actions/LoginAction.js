import axios from "axios";
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
        console.log(res.data);
        localStorage.setItem("user", res.data);

        return { type: POST_LOGIN, payload: res.data };
      })
      .catch((error) => console.log(error));
  };
};
export default LoginAction;
