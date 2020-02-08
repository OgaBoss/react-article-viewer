import React from "react";
import { Provider } from 'react-redux'
import { render, wait } from '@testing-library/react'
import Platforms from "../platforms";
import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as platform_reducer} from "../../../redux/platforms/platform_reducer";
import Service from "../../../redux/platforms/service";

jest.mock("../../../redux/platforms/service")

function renderWithRedux(
  ui,
  store
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}
const initialState = {
  loading: false,
  platforms: [],
  error: null,
}

const store = createStore(combineReducers({platform_reducer}), initialState, applyMiddleware(thunk) );

describe("Platforms",() => {
  test('shows loading on page load', async() => {
    const { getByText, getByTestId } = renderWithRedux(<Platforms />, store)
    // const platforms = [{name: 'abc'}, {name: 'cnn'}]
    getByText('Loading...')
    // wait()
    // expect(fetchPlatforms).toHaveBeenCalledTimes(1);
    await wait(() => {
      // expect(getByText("abc")).toBeInTheDocument()
      expect(getByTestId('title').textContent).toBe('All News Platforms')
      console.log(store.getState())
  
    });
  
  })
})
