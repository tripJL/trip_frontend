import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import login from "./reducer/login";
//saga
import { authSage } from "./saga/auth";

export const rootReducer = combineReducers({ login });

export function* rootSaga() {
    yield all([authSage()]);
}
