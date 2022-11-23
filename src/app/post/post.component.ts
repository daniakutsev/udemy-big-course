import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  // @ts-ignore
  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  // @ts-ignore
  @ContentChild('info', {static: true}) infoRef: ElementRef

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }

}
