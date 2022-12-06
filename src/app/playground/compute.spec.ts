import {compute} from "./compute";

export {compute} from './compute'

describe('compute', () => {
  it('should return 0 if negative x', () => {
    const result = compute(-2)
    expect(result).toBe(0)
  })
  it('should return a x+1 if x>0', () => {
    const result = compute(5)
    expect(result).toBe(6)
  });
});
