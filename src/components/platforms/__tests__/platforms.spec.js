import React from "react";
import { Provider } from 'react-redux'
import { render, wait } from '@testing-library/react'
import Platforms from "../platforms";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../../../redux/reducers";

jest.mock("../../../redux/service")

function renderWithRedux(
  ui,
  store
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

const store = createStore(reducer, {}, applyMiddleware(thunk) );

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
      getByText('abc')
      getByText('cnn')
    });
  
  })
})
