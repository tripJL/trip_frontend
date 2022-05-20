export const BOARDDETAIL = "board/BOARDDETAIL";
export const WRITEBOARD = "board/WRITEBOARD";
export const MODIFYBOARD = "board/MODIFYBOARD";
export const DELETEBOARD = "board/DELETEBOARD";

export const setWriteBoard = (data) => {
    return {
        type: WRITEBOARD,
        data,
    };
};
