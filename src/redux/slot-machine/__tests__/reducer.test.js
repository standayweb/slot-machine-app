import { slotMachineReducer } from '../reducer';

const initialState = {
  colors: ['green', 'green', 'red'],
  spins: [],
};

describe('slotMachineReducer', () => {
  it('correctly handles SPIN action', () => {
    const state = slotMachineReducer(initialState, {
      payload: {
        key: 123,
        colors: ['red', 'green', 'blue'],
      },
      type: 'SPIN',
    });
    expect(state).toEqual({
      colors: ['red', 'green', 'blue'],
      spins: [
        {
          key: 123,
          colors: ['red', 'green', 'blue'],
        },
      ],
    });
  });
});
