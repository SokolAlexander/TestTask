import {getMostPopular} from '../getMostPopular';

describe('getMostPopular', () => {
  it('returns empty array if empty obj passed', () => {
    const expected: any[] = [];
    const received = getMostPopular({});

    expect(received).toEqual(expected);
  });

  it('returns an array of name and value for biggest value found', () => {
    const expected = ['name2', 19];
    const received = getMostPopular({name: 0, name2: 19, name3: -10, name4: 0});

    expect(received).toEqual(expected);
  });

  it('returns first of the biggest values found', () => {
    const expected = ['name', 10];
    const received = getMostPopular({
      name: 10,
      name2: 10,
      name3: 10,
      name4: 10,
    });

    expect(received).toEqual(expected);
  });
});
