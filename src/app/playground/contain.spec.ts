import {contain} from "./contain";

describe('contain', () => {

  it('should return a countries code', () => {
    const result = contain()
    expect(result).toContain('UA')
    expect(result).toContain('USA')
    expect(result).toContain('UK')
  })

})
