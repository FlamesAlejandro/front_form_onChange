import { types } from "../types/types";

export const GlobalIniting = () => ({
    type: types.GLOBAL_INITING,
})

export const GlobalLogin = (data: string) => ({
    type: types.GLOBAL_LOGIN,
    payload: data
})

export const GlobalInit = (data: any) => ({
    type: types.GLOBAL_INIT,
    payload: data
})
