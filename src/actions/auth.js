import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import { imgLogout, startLoadingImgs } from './imgs';

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
        dispatch(startLoadingImgs(user.uid))
      })
      .catch(err => {
        if(err.code === 'auth/wrong-password') {
          Swal.fire({
            title: 'La contraseña es incorrecta',
            icon: 'error',
            confirmButtonText: 'Probar nuevamente'
          })
        } else if(err.code === 'auth/user-not-found') {
          Swal.fire({
            title: 'No se encontro un usuario registrado con ese correo',
            icon: 'error',
            confirmButtonText: 'Probar nuevamente'
          })
        }
        dispatch(finishLoading());
      });
  }
}

export const startRegisterWithEmailPassword = (email, password, userName) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        await user.updateProfile({ displayName: userName });
      })
      .catch(err => {
        if(err.code === 'auth/weak-password') {
          Swal.fire({
            title: 'La contraseña debe tener 6 caracteres como minimo',
            icon: 'error',
            confirmButtonText: 'Probar nuevamente'
          })
        }
        dispatch(finishLoading());
      });
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(login(
          user.uid,
          user.displayName,
          user.photoURL
        ))
        dispatch(startLoadingImgs(user.uid))
      });
  }
}

export const login = (uid, displayName, photoURL) => {
  // dispatch(startLoadingImgs(uid))
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL
    }
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(imgLogout());
  }
}

export const logout = () => {
  return {
    type: types.logout
  }
}