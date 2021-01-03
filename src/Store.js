import { createStore } from "redux";

import fetchDataReducer from "./Components/Reducer";

const store = createStore(fetchDataReducer);

export default store;
