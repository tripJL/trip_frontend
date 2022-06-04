export const routes = {
    main: "/",
    login: "/Login",
    join: "/Join",
    writePost: "/writePost",
};

export const api = {
    login: "login",
    join: "join",
    editor: "upload.api",
    board: {
        set: "board/insert.api",
        get: "board/gets.api",
    },
};
