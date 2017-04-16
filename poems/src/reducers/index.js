import { combineReducers } from 'redux';
import PoemReducer from './PoemReducer';

export default combineReducers({
  poem: PoemReducer
});
