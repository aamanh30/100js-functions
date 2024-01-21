import { concatStrings } from './3.concat-strings';

describe('concatStrings', () => {
  it('should return the concatenated string', () => {
    expect(concatStrings('-', 'hello', 'world')).toEqual('hello-world');
    expect(concatStrings(' ', 'hello', 'world')).toEqual('hello world');
    expect(concatStrings('separator', '', 'world')).toEqual('separatorworld');
    expect(concatStrings('separator', 'hello', '')).toEqual('helloseparator');
  });
});
