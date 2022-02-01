import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducers from './countries/countries';

const reducer = combineReducers({
  countryReducers,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
