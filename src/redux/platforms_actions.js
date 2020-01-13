import {FETCH_PLATFORM_SUCCESS, FETCH_PLATFORM_ERROR, FETCH_PLATFORM_STARTED, FILTER_PLATFORMS} from "./actionTypes";
import axios from 'axios'

export const fetchPlatforms = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPlatformStarted());
      const response = await axios.get(`${process.env.REACT_APP_API_URL}sources?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`)
      dispatch(fetchPlatformsSuccess(response.data.sources))
    } catch (e) {
      dispatch(fetchPlatformError(e))
    }
  }
}

export const fetchPlatformsSuccess = (platforms) => ({
  type: FETCH_PLATFORM_SUCCESS,
  payload: platforms
});

export const fetchPlatformStarted = () => ({
  type: FETCH_PLATFORM_STARTED
});

export const fetchPlatformError = error => ({
  type: FETCH_PLATFORM_ERROR,
  payload: {
    error,
  }
});

export const filterPlatforms = (value) => ({
  type: FILTER_PLATFORMS,
  payload: value
})
