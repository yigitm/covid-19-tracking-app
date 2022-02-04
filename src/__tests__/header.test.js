import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getTotal } from '../redux/header/header';

const middlewares = [thunk, logger];
const mockStore = configureStore(middlewares);
describe('GET_TOTAL reducer: PASS & FAIL cases with mock store', () => {
  it('test: GET_TOTAL action return correct payload', () => {
    // Initialize mockstore with empty state
    const initialState = [];
    const store = mockStore(initialState);

    const fetchedData = {
      total: 387331491,
    };
    // Dispatch the action
    const action = store.dispatch(getTotal([fetchedData]));
    const actions = store.getActions();
    expect(actions[0]).toEqual(action);
  });

  it('test: GET_TOTAL action return WRONG payload', () => {
    // Initialize mockstore with empty state
    const initialState = [];
    const store = mockStore(initialState);

    const fetchedData = {
      total: 387331491,
    };
    const fakeData = {
      data: '',
    };

    // Dispatch the action
    store.dispatch(getTotal([fetchedData]));
    const actions = store.getActions();
    expect(actions[0]).not.toEqual(fakeData);
  });
});
