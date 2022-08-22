import { UPDATE, CLEAR_FILTER } from "./actionTypes";

export const updateFilters = (category, filters) => {
  return {
    type: UPDATE,
    payload: { [category]: filters },
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTER,
  };
};
