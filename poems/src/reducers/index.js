import { combineReducers } from 'redux';
import PoemReducer from './PoemReducer';
import PoetryDbReducer from './PoetryDbReducer';


export default combineReducers({
  poem: PoemReducer,
  poetryDb: PoetryDbReducer
});
