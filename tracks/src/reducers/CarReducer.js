import {
  CAR_NEXT_ANIMATION_STEP
} from '../actions/types';

const BACKGROUND_POS_START = 50

const INITIAL_STATE = {
  animationProgress : 0,
  backgroundPos     : BACKGROUND_POS_START
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAR_NEXT_ANIMATION_STEP:
      let progress = action.progress;
      //calculate background position from
      //progress and BACKGROUND_POS_START
      return Object.assign({}, state, {
        animationProgress: 0,
        backgroundPos: Math.floor(
          BACKGROUND_POS_START - (progress * BACKGROUND_POS_START)
        )
      })
    default:
      return state;
  }
};

{/*https://tech.instacart.com/animating-programmatically-with-redux-and-react-e304965ec828#.da9fkanu4*/}
