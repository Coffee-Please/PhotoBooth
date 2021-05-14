import React from "react";
import { logout } from "./firebase/auth";
import { useHistory } from "react-router-dom";
import { useSession } from "./firebase/userProvider";

function Header() {
  //use the route history to route to previous page
  const history = useHistory();

  const { user } = useSession();
  const logOutUser = async () => {
    await logout();
    history.push("/login");
  };

  return (
    <header>
      <h2>PhotoBooth</h2>

      {/* render button only if logged in to page */}

      {!!user && (
        <button className="ui secondary button logout" onClick={logOutUser}>
          LOGOUT
        </button>
      )}
    </header>
  );
}
export default Header;
