import firebase from "firebase/app";
import "firebase/auth";

export const signup = async ({
  first_name,
  last_name,
  email_address,
  password,
}) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email_address, password);
  const User = resp.user;

  await User.updateProfile({
    displayName: `${first_name} ${last_name}`,
  });
  return User;
};

export const login = async ({ email_address, password }) => {
  const resp = await firebase
    .auth()
    .signInWithEmailAndPassword(email_address, password);
  //return user from response
  return resp.user;
};

export const logout = () => {
  //this is returning promise
  return firebase.auth().signOut();
};
