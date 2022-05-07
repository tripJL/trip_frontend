import { backend } from "../config/axios";
import { api } from "../global/routes";

export const editorImage = async (formData) => {
    const res = await backend.post(api.image, { ...formData });
    return res;
};
