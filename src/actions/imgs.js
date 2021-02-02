import { db } from "../firebase/firebaseConfig";
import { loadImgs } from "../helpers/loadImgs";
import { types } from "../types/types";

export const startNewFavorite = (path, shortImg) => {
  return async(dispatch, getState) => {

    const { uid } = getState().auth;

    const newFavorite = {
      path,
      shortImg
    }

    await db.collection(`${uid}/pixabay2/favorites/`).add(newFavorite);
    dispatch(startLoadingImgs(uid))
  }
}

export const startLoadingImgs = (uid) => {
  return async(dispatch) => {
    const imgs = await loadImgs(uid);
    dispatch(setImgs(imgs));
  }
}

export const setImgs = (imgs) => {
  return {
    type: types.imgsLoad,
    payload: imgs
  }
}

export const startDeleting = (id) => {
  return async(dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/pixabay2/favorites/${id}`).delete();

    dispatch(deleteImg(id));
  }
}

export const deleteImg = (id) => {
  return {
    type: types.imgsRemoved,
    payload: id
  }
}

export const imgLogout = () => {
  return {
    type: types.imgsLogoutCleaning
  }
}