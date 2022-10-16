import { ACTION_TYPES } from "./postActionTypes";

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        post: {},
        error: false,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
