import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { GlobalReducers } from "../reducers/globalReducers";
import { loadFromSessionStorage, saveToSessionStorage } from "./localStorage";
import { TRedux } from "./types/TStorage";

const reducers = combineReducers({
  global: GlobalReducers
});

export const store = createStore(
  reducers,
  loadFromSessionStorage()
);


// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRedux> = useSelector

// listen for store changes and use saveToLocalStorage to
// save them to localStorage en cada cambio
store.subscribe(() => saveToSessionStorage(store.getState()));
//save on close o refresh
// window.onbeforeunload = () => saveToSessionStorage(store.getState())