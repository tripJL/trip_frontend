import { takeEvery } from "redux-saga/effects";
import { createPromise } from "../../utils/asyncUtils";
import {
    BOARDDETAIL,
    WRITEBOARD,
    MODIFYBOARD,
    DELETEBOARD,
} from "../action/board";
import { setBoard } from "../../lib/board";

const write = createPromise(WRITEBOARD, setBoard);

export function* boardSaga() {
    yield takeEvery(WRITEBOARD, write);
}
