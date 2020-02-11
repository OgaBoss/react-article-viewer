import React from "react";
import { Provider } from 'react-redux'
import {fireEvent, render, wait} from '@testing-library/react'
import Platform from "../platform";
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
const platform = {
  name: 'abc',
  id: 1,
};
describe("Platform", () => {
  test('test api call on click of platform', async () => {
    const {getByText} = renderWithRedux(<Platform platform={platform} />, store);
    expect(store.getState().news_reducer.currentSelectedSource).toBe(null);
    const platformClick = getByText('abc');
    fireEvent.click(platformClick);
    
    await wait(() => {
      expect(store.getState().news_reducer.currentSelectedSource).toBe(1)
    })
  })
})
