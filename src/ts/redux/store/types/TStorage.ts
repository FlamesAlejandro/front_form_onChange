export type TGLOBAL_INIT_STATE = {
    loading: boolean,
    loaded: boolean,
    token: string,
}

export type TUSUARIOS_INIT_STATE = {
    loading: boolean,
}

export type TRedux = {
    global: TGLOBAL_INIT_STATE
    usuarios: TUSUARIOS_INIT_STATE
}