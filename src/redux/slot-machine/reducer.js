import { SPIN } from './action-types';
import { randomColor } from '../../lib/util';

const initialState = {
  colors: [randomColor(), randomColor(), randomColor()],
  spins: [],
};

export function slotMachineReducer(state = initialState, { payload, type }) {
  switch (type) {
    case SPIN:
      return {
        ...state,
        colors: payload.colors,
        spins: [
          {
            colors: payload.colors,
            key: payload.key,
          },
          ...state.spins,
        ],
      };

    default:
      return state;
  }
}
