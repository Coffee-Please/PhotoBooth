//from here we get access into user information and use hook to have access into current user
import firebase from "firebase/app";
import React, { useEffect, useState, useContext } from "react";



export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [session, setSession] = useState({
    user: null,
    loading: true,
  });

  //use this to listen to any changes to user authentication
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
      setSession({ loading: false, user, });
    });
    return () => unsubscribe();
  }, []);


  return (
    <UserContext.Provider value={session}>
      {!session.loading && props.children}
    </UserContext.Provider>
  );
};


//user session
export const useSession = () => {
  const session = useContext(UserContext);
  return session;
};
