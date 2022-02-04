import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getData } from '../redux/countries/countries';

const middlewares = [thunk, logger];
const mockStore = configureStore(middlewares);

it('should dispatch action', () => {
  // Initialize mockstore with empty state
  const initialState = [];
  const store = mockStore(initialState);

  // Dispatch the action
  store.dispatch(getData());

  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: 'GET_DATA' };
  expect(actions).toEqual([expectedPayload]);
});
