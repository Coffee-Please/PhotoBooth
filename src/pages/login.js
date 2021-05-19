import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../firebase/auth";
import { Link } from "react-router-dom";
import logo from "../logo.png";

//Register her is component and we have to have capital letter for component.
function LogIn(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    //create user
    let user;
    setLoading(true);

    try {
      console.log(data);
      //set user
      user = await login(data);
      reset();
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        alert("Check your password.");
      } else if (errorCode === "auth/user-not-found") {
        alert("Check your Email address");
      } else {
        alert("check your Email and Password");
      }
    }
    //if we have user
    if (user) {
      props.history.push(`/profile/${user.uid}`);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="login-container ">
      <div className="ui card login-card">
        <div className="content">
          <div className="text-container" align="center">
            <div>
              <img className="logo" src={logo} alt="Logo" />
                <br/>
            </div>
          </div>
          <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <div className="required field">
              <label>Email Address</label>
              <input
                className="inputSize"
                type="text"
                name="email_address"
                placeholder="Email Address"
                ref={register}
              />
            </div>
            <div className="required field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
              />
            </div>

            <div className="field actions">
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
              <button className="ui button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
