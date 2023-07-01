import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Movies from "./Movies";
//import DogForm from "./DogForm";
import Counter from "./classComponent/Counter";
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Counter />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Chnage Show
      </button>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<App />);
