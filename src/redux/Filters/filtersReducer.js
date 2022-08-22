import { UPDATE, CLEAR_FILTER } from "./actionTypes";

const initialState = {
  searchText: "",
  category: "",
  author: "",
  duration: [],
};

const filtersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE:
      return { ...state, ...payload };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
};

export default filtersReducer;
