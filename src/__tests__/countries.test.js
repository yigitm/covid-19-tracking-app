import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { describe } from 'jest-circus';
import { getData } from '../redux/countries/countries';

const middlewares = [thunk, logger];
const mockStore = configureStore(middlewares);

describe('GET_DATA reducer: PASS & FAIL cases with mock store', () => {
  it('test: GET_DATA action return correct payload', () => {
    // Initialize mockstore with empty state
    const initialState = [];
    const store = mockStore(initialState);

    const fetchedData = {
      name: 'Angola',
      id: 'angola',
      newCase: 98267,
      total: 98267,
      regions: {
        region: {
          region: [],
        },
      },
    };
    // Dispatch the action
    const action = store.dispatch(getData([fetchedData]));
    const actions = store.getActions();
    expect(actions[0]).toEqual(action);
  });

  it('test: GET_DATA action return WRONG payload', () => {
    // Initialize mockstore with empty state
    const initialState = [];
    const store = mockStore(initialState);

    const fetchedData = {
      name: 'Angola',
      id: 'angola',
      newCase: 98267,
      total: 98267,
      regions: {
        region: {
          region: [],
        },
      },
    };

    const fakeData = {
      name: '????',
      id: 'angola',
      newCase: 98267,
      total: 98267,
      regions: {
        region: {
          region: [],
        },
      },
    };

    // Dispatch the action
    store.dispatch(getData([fetchedData]));
    const actions = store.getActions();
    expect(actions[0]).not.toEqual(fakeData);
  });
});
