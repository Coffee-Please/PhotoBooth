import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSession } from "../firebase/userProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSession();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!!user && user.uid === props.match.params.id) {
          return <Component {...props} />;
        } else {
          <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
