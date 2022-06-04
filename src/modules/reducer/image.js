import { IMAGE } from "../action/image";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeSuccess, typeError } from "../../utils/actionUtils";

const initialState = {
    image: reducerUtils.initial(null),
};

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case IMAGE:
        case typeSuccess(IMAGE):
        case typeError(IMAGE):
            return handleAsyncReducer(IMAGE, "image", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
