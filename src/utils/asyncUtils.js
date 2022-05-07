import { call, put } from "redux-saga/effects";

export const createPromise = (type, pomiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return function* saga(action) {
        try {
            const data = yield call(pomiseCreator, action.data);
            yield put({ type: SUCCESS, data });
        } catch (error) {
            yield put({ type: ERROR, error: true, data: error });
        }
    };
};
