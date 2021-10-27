import { types } from "../types/types";

export const UsuarioSave = (data: any) => ({
    type: types.USUARIOS_SAVE,
    payload: data
})
