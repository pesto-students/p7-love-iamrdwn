import { createStore } from "redux";
import { rootReducer } from "./reducers/index";

export let store = createStore(rootReducer);
