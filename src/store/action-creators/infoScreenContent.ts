import {Dispatch} from "redux";
import {IFilm} from "../../types/film";
import {InfoScreenContentActions, InfoScreenContentActionTypes} from "../../types/infoScreenContent";


export const setInfoScreenContent = (film: IFilm) => {
  return (dispatch: Dispatch<InfoScreenContentActions>) => {

    dispatch({type: InfoScreenContentActionTypes.SET_INFO_SCREEN_CONTENT, payload: film})
  }
}

export const removeInfoScreenContent = () => {
  return (dispatch: Dispatch<InfoScreenContentActions>) => {
    dispatch({type: InfoScreenContentActionTypes.REMOVE_INFO_SCREEN_CONTENT})
  }
}