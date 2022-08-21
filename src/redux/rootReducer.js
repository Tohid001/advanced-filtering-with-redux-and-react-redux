import { combineReducers } from "redux";
import filtersReducer from "./Filters/filtersReducer";
import cardsReducer from "./Cards/cardsReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  blogs: cardsReducer,
});

export default rootReducer;
