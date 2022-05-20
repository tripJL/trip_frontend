import { backend } from "../config/axios";
import { api } from "../global/routes";

export const uploadImage = async (formData) => {
    const res = await backend.post(api.editor, formData);
    return res;
};
