import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import auth from "./reducer/auth";
//saga
import { authSage } from "./saga/auth";

export const rootReducer = combineReducers({ auth });

export function* rootSaga() {
    yield all([authSage()]);
}
