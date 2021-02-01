import { types } from '../types/types';

export const startLoading = () => {
  return {
    type: types.uiStartLoading
  }
}
export const finishLoading = () => {
  return {
    type: types.uiFinishLoading
  }
}