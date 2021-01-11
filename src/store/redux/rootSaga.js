import { all } from "redux-saga/effects";
import watcherUser from "./user/sagas";
import watcherProduct from "./product/sagas";
import watcherCategory from "./category/sagas";

function* rootSagas() {
  yield all([watcherUser(), watcherProduct(), watcherCategory()]);
}

export default rootSagas;
