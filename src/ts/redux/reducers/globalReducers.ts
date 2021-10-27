
import { TGLOBAL_INIT_STATE } from "../store/types/TStorage";
import { types } from "../types/types";



const INIT_STATE: TGLOBAL_INIT_STATE = {
    loading: false,
    token: "",
    loaded: false
};

export const GlobalReducers = (state = INIT_STATE, action: any): TGLOBAL_INIT_STATE => {
    switch (action.type) {
        case types.GLOBAL_INITING: {
            //Guardamos los nuevos datos necesarios para la sesion
            console.log(action.payload)
            return {
                ...state,
                loading: true,
            };
        }
        case types.GLOBAL_LOGIN: {
            //Guardamos los nuevos datos necesarios para la sesion
            return {
                ...state,
                token: action.payload,
            };
        }
        case types.GLOBAL_INIT: {
            //Guardamos los nuevos datos necesarios para la sesion
            return {
                ...state,
                loaded: true,
                loading: false,
                ...action.payload,
            };
        }
        default:
            return state;
    }
};
