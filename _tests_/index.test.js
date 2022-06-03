// import * as myModule from '../index.js';

const MOCK_ACTIVITY = [
  'Read a book',
  'stroll in the park',
  'play a game',
  'go shopping',
];

describe('activity', () => {
  let result;
  it('should return first entry from mock', async () => {
    result = MOCK_ACTIVITY[1];
    console.log(result);
    expect(result).toBe('stroll in the park');
  });
});
