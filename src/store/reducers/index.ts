import {combineReducers} from "redux";
import {filmsReducer} from "./filmsReducer";
import {infoScreenContentReducer} from "./infoScreenContentReducer";


export const rootReducer = combineReducers({
  films: filmsReducer,
  infoScreenContent: infoScreenContentReducer,
})

export type RootState = ReturnType<typeof rootReducer>