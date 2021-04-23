import React from "react";
import "./App.css";
import "./firebase/config";
import  Header  from "./Header";
import Footer from "./Footer";
import { UserProvider } from "./firebase/userProvider";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import Title from "./components/Title";
import ProfileRedirect from './router/profileRedirect';
import PrivateRoute from './router/privateRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header></Header>
        <div >
          {/* like switch will look for the route is match and if not match switch to other route*/}
          <Switch>
            <ProfileRedirect exact path="/signup" component={SignUp} />
            <ProfileRedirect exact path="/login" component={LogIn} />
            <PrivateRoute exact path="/profile/:id" component={Title} />
            <Route exact path="/"><Redirect to="/login"/></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </UserProvider>
  );
}

export default App;
