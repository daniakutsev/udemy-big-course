import {Component, OnInit} from '@angular/core'
import {Post, PostsService} from "../posts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // @ts-ignore
  post: Post

  constructor(private router: Router,
              private postsService: PostsService,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // @ts-ignore
      this.post = this.postsService.getById(+params.id)
    })
  }


  loadPost() {
    this.router.navigate(['posts',44])
  }
}
