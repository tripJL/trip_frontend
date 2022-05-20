import { takeEvery } from "redux-saga/effects";
import { createPromise } from "../../utils/asyncUtils";
import { BOARDLIST } from "../action/boards";
import { getBoard } from "../../lib/boards";

const allList = createPromise(BOARDLIST, getBoard);

export function* boardsSaga() {
    yield takeEvery(BOARDLIST, allList);
}
