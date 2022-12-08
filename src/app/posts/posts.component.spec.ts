import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {EMPTY, of, throwError} from "rxjs";

describe('PostsComponent', () => {
  let service: PostsService
  let component: PostsComponent

  beforeEach(() => {
      //@ts-ignore
      service = new PostsService(null)
      component = new PostsComponent(service)
    }
  )

  it('should been call after OnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY
    })

    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })
  it('should been update posts after OnInit', () => {

    let posts = [1, 2, 3, 4]

    spyOn(service, 'fetch').and.returnValue(of(posts))

    component.ngOnInit()
    expect(component.posts.length).toBe(posts.length)
  })
  it('should add a new post', () => {
    const post = {title: 'test'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))

    component.add(post.title)

    expect(spy).toHaveBeenCalled()
    expect(component.posts.length).toBe(1)
  })
  it('should been have a error message', () => {
    const message = 'Error message'
    spyOn(service, 'create').and.returnValue(throwError(message))

    component.add('title')

    expect(component.message).toBe(message)
  });
  it('should remove post if user confirms', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(true)

    component.delete(10)
    expect(spy).toHaveBeenCalledWith(10)
  })
  it('should NOT remove post if user doesn`t confirms', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY)
    spyOn(window, 'confirm').and.returnValue(false)

    component.delete(10)
    expect(spy).not.toHaveBeenCalled()
  })

})


