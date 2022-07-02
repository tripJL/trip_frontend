export const routes = {
    main: "/",
    login: "/login",
    join: "/join",
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
