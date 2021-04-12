//this will check for user session if user is logged in can not be able to go back to login or signup page from url
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSession } from "../firebase/userProvider";

//..rest means destructor the rest of the props
const ProfileRedirect = ({ component : Component, ...rest }) => {
  //grab whole user by using useSession
  const { user } = useSession();
  return (
    <Route
      {...rest}
      render = {(props) => 
        !user ? (
          <Component {...props} />
          
        ) : (
          <Redirect
            to={{
              pathname: `/profile/${user.uid}`,
              //where redirect from
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );   
};

export default ProfileRedirect;