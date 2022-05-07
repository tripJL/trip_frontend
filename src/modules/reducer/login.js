import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../action/login";
import { handleAsyncReducer } from "../../utils/reducerUtils";

const initialState = {
    login: null,
};

const reducer = (state = initialState, action) => {
    // const { type, data } = action;
    // switch (type) {
    //     case LOGIN:
    //         return {
    //             ...state,
    //             login: data,
    //         };
    //     default:
    //         return state;
    // }
    return handleAsyncReducer(LOGIN, "login", true)(state, action);
};

export default reducer;
