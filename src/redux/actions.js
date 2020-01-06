import {SET_PLATFORM} from "./actionTypes";
import axios from 'axios'

export const fetchPlatforms = () => {
  return async (dispatch) => {
    try {
      const platforms = axios.get()
    } catch (e) {
    
    }
  }
}

export const setPlatforms = ({platforms}) => ({
  type: SET_PLATFORM,
  payload: platforms
});
