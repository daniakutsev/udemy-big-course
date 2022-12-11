import { ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have link to posts page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
    let index = debugElements.findIndex(e => e.properties['href'] === '/posts')
    expect(index).toBe(0)
  })
});
