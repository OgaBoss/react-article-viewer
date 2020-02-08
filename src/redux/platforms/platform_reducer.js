import {
  FETCH_PLATFORM_SUCCESS,
  FETCH_PLATFORM_ERROR,
  FETCH_PLATFORM_STARTED,
} from "./platformActionTypes";

export const initialState = {
  loading: false,
  platforms: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  console.log(state)
  if (action.type === FETCH_PLATFORM_STARTED) {
    return {
      ...state,
      loading: true
    }
  }
  
  if (action.type === FETCH_PLATFORM_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      platforms: action.payload
    }
  }
  
  if (action.type === FETCH_PLATFORM_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    }
  }
  
  return state
}
