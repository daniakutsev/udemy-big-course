import {Component} from "@angular/core";

@Component({
  selector: 'app-post2',
  template: `
    <div class="post2">
      <h1>Post 2 title(template component)</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, optio.
      </p>
    </div>`,
  styles: [
    ".post2{ width: 450px; border: 1px dashed #ccc; padding: 1rem;margin-bottom: 1rem; }"]
})
export class Post2Component {
}
