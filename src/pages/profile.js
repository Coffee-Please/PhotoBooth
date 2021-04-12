import React from "react";

import { useSession } from "../firebase/userProvider";

const Profile = () => {
  //grab use call useSession hook
  const { user } = useSession();

  //no user
  if (!user) {
    return null;
  }
  //there is user return these info
  return (
    <div className="tittle app">
     

      <p>Name : {user.displayName}</p>
      <p>Email : {user.email}</p>
      <p>ID : {user.uid}</p>
    </div>
  );
};

export default Profile;
