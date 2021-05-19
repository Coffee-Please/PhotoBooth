import React from "react";
import { logout } from "./firebase/auth";
import { useHistory } from "react-router-dom";
import { useSession } from "./firebase/userProvider";
import Logo from "./camera.png";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <div>
          <img src={Logo} style={{ width: "40px", float: "left" }} alt="" />
          <h2>PhotoBooth</h2>
        </div>
        {!!user && (
          <button className="ui secondary button logout" onClick={logOutUser}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
export default Header;
