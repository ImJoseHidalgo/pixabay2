import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {

    dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        dispatch(login(
          user.uid,
          user.displayName
        ));
        dispatch(finishLoading());
      })
      .catch(err => {
        console.log(err);
        dispatch(finishLoading());
      });
  }
}

export const startRegisterWithEmailPassword = (email, password, userName) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        await user.updateProfile({ displayName: userName });
        console.log(user);
      })
      .catch(err => console.log(err))
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(login(
          user.uid,
          user.displayName
        ))
      });
  }
}

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  }
}

export const logout = () => {
  return {
    type: types.logout
  }
}