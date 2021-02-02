import { types } from "../types/types";

const initialState = {
  imgs: [],
  isEmpty: true
}

export const imgsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.imgsLoad:
      return {
        ...state,
        imgs: [...action.payload]
      }
    case types.imgsRemoved:
      return {
        ...state,
        imgs: state.imgs.filter(img => img.id !== action.payload)
      }
    case types.imgsLogoutCleaning:
      return {
        imgs: []
      }

    default:
      return state;
  }
}