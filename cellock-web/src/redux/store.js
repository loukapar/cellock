import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { saveToLocalStorage, loadFromLocalStorage } from "./storage";

const middlewares = [applyMiddleware(thunk)];
const persistentState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistentState,
  compose(...middlewares)
);

store.subscribe(() =>
  saveToLocalStorage({
    authenticationReducer: store.getState().authenticationReducer,
  })
);

export default store;
