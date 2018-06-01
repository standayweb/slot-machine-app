import { spin } from '../actions';

describe('spin', () => {
  const time = Date.now();
  it('creates correct action object', () => {
    const result = spin();

    expect(result.type).toEqual('SPIN');
    expect(result.payload.colors.length).toEqual(3);
    expect(typeof result.payload.key).toEqual('number');
    expect(
      result.payload.colors[0] === 'green' ||
        result.payload.colors[0] === 'red' ||
        result.payload.colors[0] === 'blue' ||
        result.payload.colors[0] === 'yellow',
    ).toEqual(true);
    expect(
      result.payload.colors[1] === 'green' ||
        result.payload.colors[1] === 'red' ||
        result.payload.colors[1] === 'blue' ||
        result.payload.colors[1] === 'yellow',
    ).toEqual(true);
    expect(
      result.payload.colors[2] === 'green' ||
        result.payload.colors[2] === 'red' ||
        result.payload.colors[2] === 'blue' ||
        result.payload.colors[2] === 'yellow',
    ).toEqual(true);
  });
});
