import { createStore, applyMiddleware, combineReducers } from 'redux';
import show from './reducers/show';
import zhanwen from './reducers/zhanwen';
const rootReducer = combineReducers({
  show,
  zhanwen
});
export default createStore(rootReducer, applyMiddleware());
