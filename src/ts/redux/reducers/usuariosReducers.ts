import { TUSUARIOS_INIT_STATE } from "../store/types/TStorage";
import { types } from "../types/types";



const INIT_STATE: TUSUARIOS_INIT_STATE = {
    loading: false,
};

export const UsuariosReducers = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case types.USUARIOS_SAVE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
};
