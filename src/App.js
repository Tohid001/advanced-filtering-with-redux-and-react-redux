import React from "react";
import { Header, CardGrid } from "./Containers";
import { updateFilters } from "./redux/Filters/actions";

function App() {
  // const filterBySearchHandler = (text) => {
  //   dispatch(updateFilters("searchText", text));
  // };
  return (
    <div>
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
