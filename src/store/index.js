import { legacy_createStore } from "redux";

export default function configStore(rootReducer) {
  const store = legacy_createStore(rootReducer);
  return store;
}
