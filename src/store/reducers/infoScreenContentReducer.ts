import {
  InfoScreenContentActions,
  InfoScreenContentActionTypes,
  InfoScreenContentState
} from "../../types/infoScreenContent";

const initialState: InfoScreenContentState = {
  film: null
}

export const infoScreenContentReducer = (state = initialState, action: InfoScreenContentActions): InfoScreenContentState => {
  switch (action.type) {
    case InfoScreenContentActionTypes.SET_INFO_SCREEN_CONTENT:
      return {film: action.payload}
    case InfoScreenContentActionTypes.REMOVE_INFO_SCREEN_CONTENT:
      return {film: null}
    default:
      return state
  }
}