import {
    WRITEBOARD,
    BOARDDETAIL,
    MODIFYBOARD,
    DELETEBOARD,
} from "../action/board";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeSuccess, typeError } from "../../utils/actionUtils";

const initialState = {
    writeboard: reducerUtils.initial(null),
};

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case WRITEBOARD:
        case typeSuccess(WRITEBOARD):
        case typeError(WRITEBOARD):
            return handleAsyncReducer(
                WRITEBOARD,
                "writeboard",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
