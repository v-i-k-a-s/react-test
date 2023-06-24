import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Movies from "./Movies";
import DogForm from "./DogForm";
const App = () => {
  return (
    <div>
      <DogForm />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<App />);
