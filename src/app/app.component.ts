import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // @ts-ignore
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective

  constructor(
    private resolver: ComponentFactoryResolver,
    private title:Title,
    private meta:Meta
    ) {
    title.setTitle('MyTitle')
    meta.addTags([
      {name:'content',content:'google,chrome'},
      {name:'description',content:'this is my app'}
    ])
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(ModalComponent)

    component.instance.title = 'Dynamic title'
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }
}

