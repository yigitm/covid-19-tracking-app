import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getData } from '../redux/countries/countries';

const middlewares = [thunk, logger];
const mockStore = configureStore(middlewares);
//const getData = () => ({ type: 'GET_DATA' });
it('test: GET_DATA action return correct payload', () => {
  // Initialize mockstore with empty state
  const initialState = [];
  const store = mockStore(initialState);

  // Dispatch the action
  const fetchedData = {
    name: 'Angola',
    id: 'angola',
    newCase: 98267,
    total: 98267,
    regions: {
      region: { region: [] },
    },
  };

  const action = store.dispatch(getData([fetchedData]));
  const actions = store.getActions();
  expect(actions[0]).toEqual(action);

  /* Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedPayload = { type: 'GET_DATA', fetchedData };
  expect(actions).toEqual([expectedPayload]);*/
});
