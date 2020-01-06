import {SET_PLATFORM} from "./actionTypes";

export const setPlatforms = ({platforms}) => ({
  type: SET_PLATFORM,
  payload: platforms
});
