import {
  FETCH_PLATFORM_SUCCESS,
  FETCH_PLATFORM_ERROR,
  FETCH_PLATFORM_STARTED,
} from "../platformActionTypes";
import {reducer} from "../platform_reducer";

describe('Platform Reducer', () => {
  test('check initial state', () => {
    expect(reducer({}, {})).toEqual({})
  })
  
  test('should handle FETCH_PLATFORM_STARTED', () => {
    const action = {
      type: FETCH_PLATFORM_STARTED
    };
    expect(reducer({}, action)).toEqual({loading: true})
  })
  
  test('should handle FETCH_PLATFORM_SUCCESS', () => {
    const action = {
      type: FETCH_PLATFORM_SUCCESS,
      payload: [
        {
          name: 'abc',
        },
        {
          name: 'cnn'
        }
      ]
    }
    
    const expected = {
      loading: false,
      error: null,
      platforms: action.payload
    }
    
    expect(reducer({}, action)).toEqual(expected)
  })
  
  test('should handle FETCH_PLATFORM_ERROR', () => {
    const action = {
      type: FETCH_PLATFORM_ERROR,
      payload: {
        error: {
          code: 500
        }
      }
    };
  
    const expected = {
      loading: false,
      error: action.payload.error,
    };
    
    expect(reducer({}, action)).toEqual(expected)
  })
});
