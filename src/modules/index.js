import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import auth from "./reducer/auth";
import board from "./reducer/board";
import boards from "./reducer/boards";
import image from "./reducer/image";
//saga
import { authSaga } from "./saga/auth";
import { boardSaga } from "./saga/board";
import { boardsSaga } from "./saga/boards";
import { imageSaga } from "./saga/image";

export const rootReducer = combineReducers({ auth, board, boards, image });

export function* rootSaga() {
    yield all([authSaga(), boardSaga(), boardsSaga(), imageSaga()]);
}
