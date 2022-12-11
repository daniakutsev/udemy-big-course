import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  template: `Posts component`,
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts = []
  // @ts-ignore
  message: string

  constructor(private service: PostsService) {
  }

  ngOnInit(): void {
    this.service.fetchPromise().then(p => {
      // @ts-ignore
      this.posts = p
    })
  }

  add(title: string) {
    const post = { title }
    this.service.create(post).subscribe(p => {
      // @ts-ignore
      this.posts.push(p)
    }, err => this.message = err)
  }

  delete(id:number) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe()
    }
  }
}
