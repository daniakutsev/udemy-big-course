import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(posts: Post[], search: string = '', filterOption: string): Post[] {
    if (!search.trim()) {
      return posts
    }

    return posts.filter(post => {
      // @ts-ignore
      return post[filterOption].toLowerCase().includes(search.toLowerCase())
    })

  }
}
