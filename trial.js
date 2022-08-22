const initialState = {
  searchText: "",
  category: "",
  author: "",
  duration: ["a"],
};

console.log(
  Object.keys(initialState).every((key) => {
    console.log(key, !initialState[key] || initialState[key].length == 0);

    return !initialState[key] || initialState[key].length == 0;
  })
);

// console.log(initialState.author);
// initialState.searchText && console.log(true);
