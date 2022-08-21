const initialState = [];

const filtersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "value":
      break;

    default:
      return state;
  }
};

export default filtersReducer;
