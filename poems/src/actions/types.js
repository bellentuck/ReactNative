export const NEXT_LINE = 'next_line';
export const PREV_LINE = 'prev_line';
export const POEM_BEGUN = 'poem_begun';
export const POEM_ENDED = 'poem_ended';
export const POEM_RESET = 'poem_reset';

// PoetryDB-API-specific
export const FETCHING_POETRY = 'fetching_poetry';
export const GET_RANDOM_TITLE = 'get_random_title';
export const GET_POEM = 'get_poem';
export const API_FAIL = 'api_fail';

export const INITIAL_STATE = {
  loading: false,
  error: '',
  currentPoem: { title: '', author: '', lines: '', linecount: 0 },
  currentLine: 0,
  poemHasBegun: false,
  poemHasEnded: false
};
