import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";
// import sagas from "./user/sagas"; //TODO: Criar Root Sagas
import sagas from "./rootSaga"
const sagaMidleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMidleware/*, logger*/))
);

sagaMidleware.run(sagas);

export default store;
