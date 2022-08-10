import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginAction from "../redux/actions/LoginAction";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    dispatch(LoginAction(data));

    reset();
    navigate("/service");
  };
  return (
    <>
      <div className="outerDiv">
        <div className="container a">
          <div className="row">
            <h1>LOGIN FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-4">
                <div className="form-group ">
                  {/* TITTLE INPUT WITH ERROR */}

                  {/* <label>Tittle</label> */}
                  {/* <input
                    {...register("tittle", {
                      required: true,
                      maxLength: 10,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Tittle"
                  />
                  {errors.tittle?.type === "required" && (
                    <h6 className="err">Please fille title</h6>
                  )} */}

                  {/* 
                  {errors.tittle?.type === "required" && (
                    <h6>rtittle is required please fill Tittle</h6>
                  )} */}
                  {/* <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
                </div>
              </div>

              <div className=" col-4">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">EMAIL</label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                    type="text"
                    className="form-control"
                    placeholder="ENTER YOUR EMAIL"
                  />
                  {errors.email && (
                    <span className="err">
                      email with @ special character is required please fill
                      Tittle
                    </span>
                  )}
                </div>
              </div>

              <div className=" col-4">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">PASSWORD</label>
                  <input
                    {...register("password", {
                      required: true,
                    })}
                    type="text"
                    className="form-control"
                    placeholder="PASSWORD"
                  />
                  {errors.password && (
                    <span className="err">
                      Password filed is match to confirm password field and
                      requred
                    </span>
                  )}
                </div>
              </div>
              {/* CONFIRM PASSWORD FIELD-------- */}

              <div className=" col-4">
                <div className="form-check">
                  <input
                    {...register("checked", {
                      required: true,
                    })}
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  {errors.checked?.type === "required" && (
                    <p className="err">ckeked is required please Ckecked</p>
                  )}
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary lgbtn">
                  LOGIN
                </button>
                <h3 className="or_Tage">OR</h3>
                <Link to="/signup">
                  {" "}
                  <button className="btn btn-warning  snbtn">SIGNUP</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
