import React from "react";
import { createRoot } from "react-dom/client";
//import Movies from "./Movies";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(React.createElement(App));
