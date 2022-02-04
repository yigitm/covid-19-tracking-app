import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducers from './countries/countries';
import headerReducers from './header/header';

const reducer = combineReducers({
  countryReducers,
  headerReducers,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
