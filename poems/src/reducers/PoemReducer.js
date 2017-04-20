import {
  NEXT_LINE,
  PREV_LINE,
  POEM_BEGUN,
  POEM_ENDED,
  POEM_RESET,
  INITIAL_STATE
} from '../actions/types';

// const INITIAL_STATE = {
//   line: 0,
//   poemHasBegun: false,
//   poemHasEnded: false
// };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_LINE:
      return { ...state, currentLine: action.payload + 1 };
    case PREV_LINE:
      return { ...state, currentLine: action.payload - 1 };
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
