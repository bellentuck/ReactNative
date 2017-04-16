import {
  LINE_CHANGED,
  POEM_BEGUN,
  POEM_ENDED,
  POEM_RESET
} from '../actions/types';

const INITIAL_STATE = {
  line: 0,
  poemHasBegun: false,
  poemHasEnded: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LINE_CHANGED:
      return { ...state, line: action.payload };
    case POEM_BEGUN:
      return { ...state, poemHasBegun: true };
    case POEM_ENDED:
      return { ...state, poemHasEnded: true };
    case POEM_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
