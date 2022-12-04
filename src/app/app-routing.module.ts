import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AboutExtraComponent} from "./about-extra/about-extra.component";
import {PostComponent} from "./post/post.component";
import {PostsComponent} from "./posts/posts.component";
import {ErrrorPageComponent} from "./errror-page/errror-page.component";
import {AuthGuard} from "./auth.guard";
import {PostResolver} from "./post.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      {path: 'extra', component: AboutExtraComponent}
    ]
  },
  {
    path: 'posts/:id', component: PostComponent, resolve: {
      post: PostResolver
    }
  },
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'error', component: ErrrorPageComponent},
  {path: '**', redirectTo: 'error'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
