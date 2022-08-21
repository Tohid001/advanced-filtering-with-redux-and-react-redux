import { combineReducers } from "redux";
import filtersReducer from "./Filters/filtersReducer";
import cardsReducer from "./Cards/cardsReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  cards: cardsReducer,
});

export default rootReducer;
