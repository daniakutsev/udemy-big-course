import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AboutExtraComponent} from "./about-extra/about-extra.component";
import {PostComponent} from "./post/post.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/extra', component: AboutExtraComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
