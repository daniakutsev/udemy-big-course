import {Component} from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search: string = ''
  filterOption: string = 'title'

  posts: Post[] = [
    {title: 'Bread', text: 'Best bread in the world'},
    {title: 'Beer', text: 'Best beer in the world'},
    {title: 'Javascript', text: 'Best language in the world'}
  ]

  addPost() {
    this.posts.unshift({
        title: 'Danylo',
        text: 'Kutsev'
      }
    )
  }

}
