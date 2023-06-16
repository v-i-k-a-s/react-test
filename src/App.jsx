import React from "react";
import { createRoot } from "react-dom/client";
import Movies from "./Movies";
import "./index.css";
import MovieSearch from "./MovieSearch";
//import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <MovieSearch />
      <Movies />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<App />);
