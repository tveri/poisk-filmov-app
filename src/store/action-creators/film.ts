import {Dispatch} from "redux";
import {FilmsAction, FilmsActionTypes} from "../../types/film";
import PostService from "../../API/PostService";


export const setFilms = (querry='', offset=0, filmcount=12, options='title') => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    const response = await PostService.getAll(querry, offset, filmcount, options)
    dispatch({type: FilmsActionTypes.SET_FILMS, payload: response})
  }
}

export const addFilms = (querry='', offset=1, filmcount=12, options='title') => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    const response = await PostService.getAll(querry, offset, filmcount, options)
    dispatch({type: FilmsActionTypes.ADD_FILMS, payload: response})
  }
}