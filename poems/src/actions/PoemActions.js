import {
  LINE_CHANGED,
  POEM_BEGUN,
  POEM_ENDED,
  POEM_RESET
} from './types';




export const nextLine = ({ line }) => {
  //TODO: redux-thunk to deal w/ corner cases
  //http://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
  const incrementLine = (line) => line + 1;
  //function incrementLine(line) { return line++; }
  let newLine = incrementLine(line);
  return {
    type: LINE_CHANGED,
    payload: newLine
  };
};

export const prevLine = (line) => {
  const decrementLine = (line) => line - 1;
  let newLine = decrementLine(line);
  return {
    type: LINE_CHANGED,
    payload: newLine
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
