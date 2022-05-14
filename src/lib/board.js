import { backend } from "../config/axios";
import { api } from "../global/routes";

export const setBoard = async (formData) => {
    const res = await backend.post(api.board.set, { ...formData });
    return res;
};

export const getBoard = async (query) => {
    const res = await backend.get(api.board.get, query);
    console.log(res);
    return res;
};
