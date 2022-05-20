import { backend } from "../config/axios";
import { api } from "../global/routes";

export const setBoard = async (formData) => {
    const res = await backend.post(api.board.set, { ...formData });
    return res;
};
