import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import configStore from "./store";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";

const store = configStore(rootReducer);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
