import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

let component: PostsComponent
let service: PostsService
let fixture: ComponentFixture<PostsComponent>


describe('PostsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],
      imports: [HttpClientModule]
    })
    fixture = TestBed.createComponent(PostsComponent)
    component = fixture.componentInstance
    service = TestBed.get(PostsService)
  })

  it('should fetch post call a NgOnInit', () => {
    let posts = [1, 2, 3, 4]
    spyOn(service, 'fetch').and.returnValues(of(posts))

    fixture.detectChanges()
    // @ts-ignore
    expect(component.posts).toEqual(posts)
  });
})
