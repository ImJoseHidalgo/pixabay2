import { types } from "../types/types";

const initialState = {
  logged: false
}

export const authReducer = ( state = initialState, action) => {
  switch(action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        logged: true
      }
    case types.logout:
      return {
        logged: false
      }

    default:
      return state;
  }
}