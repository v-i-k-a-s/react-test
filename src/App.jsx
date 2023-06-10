import React from "react";
import { createRoot } from "react-dom/client";
import Movies from "./Movies";

const App = () => {
  return (
    <div>
      <Movies />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<App />);
