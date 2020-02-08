import {combineReducers} from 'redux'
import {reducer as platform_reducer} from "./platforms/platform_reducer";
import news_reducer from "./news/news_reducer";

export default combineReducers({
  platform_reducer,
  news_reducer
})
