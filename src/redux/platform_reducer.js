import {FETCH_PLATFORM_SUCCESS, FETCH_PLATFORM_ERROR, FETCH_PLATFORM_STARTED, FILTER_PLATFORMS} from "./actionTypes";

const initialState = {
  loading: false,
  platforms: [],
  error: null,
};

export default (state = initialState, action) => {
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
  
  if (action.type === FILTER_PLATFORMS) {
    console.log(state.platforms)
    return {
      ...state,
      platforms: state.platforms.filter(platform => platform.name.toLowerCase().startsWith(action.payload.toLowerCase()) )
    }
  }
  
  return state
}