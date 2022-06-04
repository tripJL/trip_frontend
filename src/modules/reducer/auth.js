import { LOGIN, JOIN } from "../action/auth";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeSuccess, typeError } from "../../utils/actionUtils";

const initialState = {
    login: reducerUtils.initial(null),
    join: reducerUtils.initial(null),
};

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case LOGIN:
        case typeSuccess(LOGIN):
        case typeError(LOGIN):
            return handleAsyncReducer(LOGIN, "login", true)(state, action);
        case JOIN:
        case typeSuccess(JOIN):
        case typeError(JOIN):
            return handleAsyncReducer(JOIN, "join", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
