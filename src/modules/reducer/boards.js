import { BOARDLIST } from "../action/boards";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeSuccess, typeError } from "../../utils/actionUtils";

const initialState = {
    boardlist: reducerUtils.initial(null),
};

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case BOARDLIST:
        case typeSuccess(BOARDLIST):
        case typeError(BOARDLIST):
            return handleAsyncReducer(
                BOARDLIST,
                "boardlist",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
