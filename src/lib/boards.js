import { backend } from "../config/axios";
import { api } from "../global/routes";

export const getBoard = async (query) => {
    const res = await backend.get(api.board.get, query);
    console.log(res);
    return res;
};
