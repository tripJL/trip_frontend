export const LOGIN = "auth/LOGIN";
export const JOIN = "auth/JOIN";

export const setLogIn = (data) => {
    return {
        type: LOGIN,
        data,
    };
};

export const setJoin = (data) => {
    return {
        type: JOIN,
        data,
    };
};
