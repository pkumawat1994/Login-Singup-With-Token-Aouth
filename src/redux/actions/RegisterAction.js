import axios from "axios";
import { useDispatch } from "react-redux";
import { POST_REGISTER } from "./types";

export const RegisterAction = (data) => {
  console.log("actiondata", data);
  const body = {
    user: {
      email: data.email,
      password: data.password,
      password_confirmation: data.password,
    },
  };

  console.log(("bodydata", body));
  return (dispatch) => {
    return axios
      .post("https://react-rails-api-demo.herokuapp.com/api/v1/signup", body)
      .then((res) => {
        dispatch({ type: POST_REGISTER, payload: res.data });
      })
      .then((resp) => localStorage.setItem("user", JSON.stringify(resp)))
      .catch((error) => console.log(console.error));
  };

  // return {
  //   type: "REGISTER_ACTION",
  //   payload: data,
  // };
};
