import {IFilm} from "./film";


export interface InfoScreenContentState {
  film: IFilm | null
}

export enum InfoScreenContentActionTypes {
  SET_INFO_SCREEN_CONTENT = 'SET_INFO_SCREEN_CONTENT',
  REMOVE_INFO_SCREEN_CONTENT = 'REMOVE_INFO_SCREEN_CONTENT'
}

interface SetInfoScreenContent {
  type: InfoScreenContentActionTypes.SET_INFO_SCREEN_CONTENT;
  payload: IFilm;
}

interface RemoveInfoScreenContent {
  type: InfoScreenContentActionTypes.REMOVE_INFO_SCREEN_CONTENT;
}

export type InfoScreenContentActions = SetInfoScreenContent | RemoveInfoScreenContent