import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import * as http from "http";
import {EMPTY, of} from "rxjs";

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

})


