import {ColorDirective} from './color.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template: `
    <p appColor="yellow">text1</p>
    <p appColor="">text2</p>
  `
})
class HostComponent {
}

describe('ColorDirective', () => {

  let fixture: ComponentFixture<HostComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, ColorDirective]
    })
    fixture = TestBed.createComponent(HostComponent)
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    // @ts-ignore
    const directive = new ColorDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should apply input color', () => {
    //@ts-ignore
    let de = fixture.debugElement.queryAll(By.css('p'))[0]
    expect(de.nativeElement.style.backgroundColor).toBe('yellow')
  });

  it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1]
    let directive = de.injector.get(ColorDirective)


    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor)
  });
});
