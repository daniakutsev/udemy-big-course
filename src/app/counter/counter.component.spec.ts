import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {

  let component: CounterComponent

  beforeEach(() => component = new CounterComponent()
  )


  it('should return a increment counter', () => {

    component.increment()
    expect(component.counter).toBe(1)
  })

  it('should return a decrement counter', () => {

    component.decrement()
    expect(component.counter).toBe(-1)
  })

})
