import { FETCHING_START, FETCH_SUCCESSFUL, FETCH_FAILURE } from '../actions'

const initialState = {
  characters: [],
  fetching: false,
  error: null

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_START:
      return {
        ...state,
        fetching: true
      }
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        error: '',
        fetching: false,
        characters: action.data
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.err
      }
    default:
      return state;
  }
};
