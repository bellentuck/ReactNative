import {
  NEXT_LINE,
  PREV_LINE,
  POEM_BEGUN,
  POEM_ENDED,
  POEM_RESET
} from './types';

/*
import * from Textfunctions as Tf:
- increment (line, word, ngram, stanza, etc)
- decrement (ibid)
- meta (bring up all metadata on this - can do meta.author, .title, etc)
- WRITE THE TEXTFUNCTIONS MODULE
*/

export const nextLine = ({ currentLine }) => {
  //TODO: redux-thunk to deal w/ corner cases
  //http://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
  return {
    type: NEXT_LINE,
    payload: currentLine
  };
};

export const prevLine = (currentLine) => {
  return {
    type: PREV_LINE,
    payload: currentLine
  };
};

export const poemStart = () => {
  return {
    type: POEM_BEGUN
  };
};

export const poemEnd = () => {
  return {
    type: POEM_ENDED
  };
};

export const poemReset = () => {
  return {
    type: POEM_RESET
  };
};
