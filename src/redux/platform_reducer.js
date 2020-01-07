import {FETCH_PLATFORM_SUCCESS, FETCH_PLATFORM_ERROR, FETCH_PLATFORM_STARTED} from "./actionTypes";

const initialState = {
  loading: false,
  platforms: [],
  error: null,
};

export default function platformReducers(state = initialState, action) {
  if (action.type === FETCH_PLATFORM_STARTED) {
    return {
      ...state,
      loading: true
    }
  }
  
  if (action.type === FETCH_PLATFORM_SUCCESS) {
    console.log(action)
    return {
      ...state,
      loading: false,
      error: null,
      platforms: [...state.platforms, action.payload]
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