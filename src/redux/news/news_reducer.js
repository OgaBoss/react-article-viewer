import {
  FETCH_PLATFORM_NEWS,
  FETCH_PLATFORM_NEWS_ERROR,
  FETCH_PLATFORM_NEWS_STARTED,
  FETCH_PLATFORM_NEWS_SUCCESS
} from "./newsActionTypes";

const initialState = {
  loading: false,
  platforms: [],
  error: null,
};

export default(state = initialState, action) => {

}