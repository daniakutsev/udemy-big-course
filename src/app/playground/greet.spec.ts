import {greet} from "./greet";

describe('greet', () => {
  it('should name = Dania, function must return Hello Dania', () => {
   expect(greet('Dania')).toContain('Hello Dania')
  });

})
