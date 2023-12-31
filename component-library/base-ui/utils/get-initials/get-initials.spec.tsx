import { GetInitials } from './get-initials';

describe('getInitials()', () => {
  it('should return two letters for the initialsof two word', () => {
    expect(GetInitials('scope name')).toEqual('sn');
  });

  it('should return the two first letters if one word', () => {
    expect(GetInitials('scope')).toEqual('sc');
  });

  it('should return undefined if the word is empty', () => {
    expect(GetInitials('')).toBeUndefined();
  });
});
