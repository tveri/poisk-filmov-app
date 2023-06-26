import {FilmsAction, FilmsActionTypes, FilmsState} from "../../types/film";


const initialState: FilmsState = {
  films: []
}

export const filmsReducer = (state = initialState, action: FilmsAction): FilmsState => {
  switch (action.type) {
    case FilmsActionTypes.ADD_FILMS:
      return {films: [...state.films, ...action.payload]}
    case FilmsActionTypes.SET_FILMS:
      return {films: action.payload}
    default:
      return state
  }
}