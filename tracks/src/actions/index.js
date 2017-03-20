import { CAR_NEXT_ANIMATION_STEP } from './types';

export const carAnimationStep = function(progress) {
  return {
    type: CAR_NEXT_ANIMATION_STEP,
    progress: progress
  }
}
