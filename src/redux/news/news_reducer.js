import {
  FETCH_PLATFORM_ARTICLES_ERROR,
  FETCH_PLATFORM_ARTICLES_STARTED,
  FETCH_PLATFORM_ARTICLES_SUCCESS
} from "./newsActionTypes";

const initialState = {
  loading: false,
  articles: [],
  error: null,
  currentSelectedSource: null,
};

export default(state = initialState, action) => {
  if (action.type === FETCH_PLATFORM_ARTICLES_STARTED) {
    return {
      ...state,
      loading: action.payload.value,
      currentSelectedSource: action.payload.source
    }
  }
  
  if(action.type === FETCH_PLATFORM_ARTICLES_SUCCESS) {
    return {
      ...state,
      loading: false,
      articles: action.payload
    }
  }
  
  if(action.type === FETCH_PLATFORM_ARTICLES_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    }
  }
  
  return state
}