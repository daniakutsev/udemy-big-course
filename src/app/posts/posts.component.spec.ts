import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";

xdescribe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    // @ts-ignore
    service = new PostsService(null)
    component = new PostsComponent(service)
  })
  it('should ', function () {

  });

})
