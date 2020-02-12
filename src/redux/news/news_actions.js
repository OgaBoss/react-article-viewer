import {FETCH_PLATFORM_ARTICLES_ERROR, FETCH_PLATFORM_ARTICLES_STARTED, FETCH_PLATFORM_ARTICLES_SUCCESS} from "./newsActionTypes";
import {getPlatformNews} from '../service'

export const fetchPlatformNews = (source) => {
  return async (dispatch) => {
    try {
      dispatch(newsStarted({value: true, source}));
      const response = await getPlatformNews(source);
      dispatch(newsSuccess(response.data.articles))
    } catch (e) {
      dispatch(newsError(e))
      dispatch(newsStarted({value: false, source}));
    }
  }
}

export const newsSuccess = news => ({
  type: FETCH_PLATFORM_ARTICLES_SUCCESS,
  payload: news
});

export const newsError = error => ({
  type: FETCH_PLATFORM_ARTICLES_ERROR,
  payload: error
});

export const newsStarted = (obj) => ({
  type: FETCH_PLATFORM_ARTICLES_STARTED,
  payload: obj,
});
