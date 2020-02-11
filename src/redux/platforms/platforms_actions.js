import {
  FETCH_PLATFORM_SUCCESS,
  FETCH_PLATFORM_ERROR,
  FETCH_PLATFORM_STARTED,
} from "./platformActionTypes";
import Service from "../service";

export const fetchPlatforms = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPlatformStarted());
      const response = await Service.fetchPlatforms();
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
