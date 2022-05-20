import { takeEvery } from "redux-saga/effects";
import { createPromise } from "../../utils/asyncUtils";
import { IMAGE } from "../action/image";
import { uploadImage } from "../../lib/image";

const upload = createPromise(IMAGE, uploadImage);

export function* imageSaga() {
    yield takeEvery(IMAGE, upload);
}
