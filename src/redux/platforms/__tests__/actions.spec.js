import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
//import * as Actions from '../platforms_actions';
import {fetchPlatforms} from '../platforms_actions';
import {FETCH_PLATFORM_ERROR} from "../platformActionTypes";
// jest.mock("../../../redux/service");

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

const mockServiceCreator = (body, succeeds = true) => () => {
  return new Promise((resolve, reject) => {
    if (succeeds) {
      console.log(succeeds)
      return resolve(body)
    }
    return reject(body)
  })
};

describe('Actions', () => {
  test('gets all news platform', async () => {
    const store = mockStore({});
    const expectedAction =  [
      { type: 'FETCH_PLATFORM_STARTED' },
      {
        type: 'FETCH_PLATFORM_SUCCESS',
        payload:[{name: 'abc'}, {name: 'cnn'}]
      }
    ];
    await store.dispatch(fetchPlatforms(mockServiceCreator({ data: {sources: [{name: 'abc'}, {name: 'cnn'}]}}, true)));
    expect(store.getActions()).toEqual(expectedAction);
  })
  
  test("failure when getting platforms", async () => {
    const store = mockStore({});
    const expectedAction =  [
      {type: "FETCH_PLATFORM_STARTED"},
      {
        type: FETCH_PLATFORM_ERROR,
        payload: {error: {}}
      },
    ];
  
    await store.dispatch(fetchPlatforms(mockServiceCreator({}, false)))
    expect(store.getActions()).toEqual(expectedAction);
  })
})
