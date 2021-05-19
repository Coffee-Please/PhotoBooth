
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../firebase/auth";
import { Link } from "react-router-dom";
import logo from "../camera.png";


function Signup(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    let newUser;
    setLoading(true);
    try {
      newUser = await signup(data);
      reset();
    } catch (error) {
      var errorCode = error.code;
      if(errorCode == "auth/weak-password"){
        alert(error.message);
      }else if(errorCode ==  "auth/invalid-email"){
        alert(error.message);
      }
      console.log(error);
    };

    if (newUser) {
      props.history.push(`/profile/${newUser.uid}`);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <div className="text-container" align="center">
          <div>
              <img className="logo" src={logo} alt="Logo" />
              <h1>PhotoBooth</h1>
            </div>
          </div>
          <form
            className="ui form "
            style={{ margin: "10% 1% 10% 1% " }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="required field ">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                ref={register}
              />
            </div>
            <div className="required field">
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                ref={register}
              />
            </div>
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
                Already have an account? <Link to="/login">Login </Link>
              </p>
              <button className="ui button" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
