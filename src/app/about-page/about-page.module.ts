import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {AboutExtraPageComponent} from "./about-extra-page/about-extra-page.component";
import {AboutPageComponent} from "./about-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AboutPageComponent, children: [
          {path: 'extra', component: AboutExtraPageComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AboutPageModule {

}
