import initialState from "./initialState";

const cardsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "value":
      break;

    default:
      return state;
  }
};

export default cardsReducer;
