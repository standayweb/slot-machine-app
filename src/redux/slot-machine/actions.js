import { SPIN } from './action-types';
import { randomColor } from '../../lib/util';

export const spin = () => {
  const colors = [randomColor(), randomColor(), randomColor()];
  return {
    type: SPIN,
    payload: {
      key: Date.now(),
      colors,
    },
  };
};
