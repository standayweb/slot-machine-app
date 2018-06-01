import { randomItem, calcMatches, wrap } from '../util';

describe('randomItem', () => {
  const items = ['red', 'green', 'blue', 'yellow'];
  it('correctly gets item from list', () => {
    expect(randomItem(items, 0)).toEqual('red');
    expect(randomItem(items, 0.25)).toEqual('green');
    expect(randomItem(items, 0.5)).toEqual('blue');
    expect(randomItem(items, 0.75)).toEqual('yellow');
  });
});

describe('calcMatches', () => {
  it('correctly calculates number of matches', () => {
    expect(calcMatches(['red', 'green', 'blue'])).toEqual(1);
    expect(calcMatches(['green', 'red', 'blue'])).toEqual(1);
    expect(calcMatches(['red', 'green', 'green'])).toEqual(2);
    expect(calcMatches(['green', 'red', 'green'])).toEqual(2);
    expect(calcMatches(['green', 'green', 'green'])).toEqual(3);
    expect(calcMatches(['red', 'red', 'red'])).toEqual(3);
  });
});

describe('wrap', () => {
  it('correctly wraps a number to a certain range', () => {
    expect(wrap(50, 100)).toEqual(50);
    expect(wrap(125, 100)).toEqual(25);
    expect(wrap(1125, 100)).toEqual(25);
    expect(wrap(1150, 100)).toEqual(50);
  });
});
