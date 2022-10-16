import { ACTIONS_TYPES } from "./formActionsType";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, actions) => {
  switch (actions.type) {
    case ACTIONS_TYPES.CHANGE_INPUT:
      return {
        ...state,
        [actions.payload.name]: actions.payload.value,
      };
    case ACTIONS_TYPES.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, actions.payload],
      };

    case ACTIONS_TYPES.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== actions.payload),
      };

    case ACTIONS_TYPES.INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case ACTIONS_TYPES.DECREASE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return state;
  }
};
