import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RoutingComponent} from './routing.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Observable, Subject} from "rxjs";
import {ActivatedRoute, Params, Router, RouterOutlet} from "@angular/router";
import {By} from "@angular/platform-browser";

class RouterStub {
  navigate(path: string[]) {
  }
}

class ActivatedRouterStub {
  private subject = new Subject()

  push(params: Params) {
    this.subject.next(params)
  }

  get params() {
    return this.subject.asObservable()
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouterStub}
      ]
    })

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should been a called navigation in f goBack()', () => {
    let router = TestBed.get(Router)
    let spy = spyOn(router, 'navigate')

    component.goBack()
    expect(spy).toHaveBeenCalledWith(['/posts'])

  });

  it('should navigated to /404 if id = 0 ', () => {
    let router = TestBed.get(Router)
    let route: ActivatedRouterStub = TestBed.get(ActivatedRoute)
    let spy = spyOn(router, 'navigate')

    route.push({id: '0'})
    expect(spy).toHaveBeenCalledWith(['/404'])
  });

  it('should have a router-outlet directive', () => {
    let de=fixture.debugElement.query(By.directive(RouterOutlet))
    expect(de).not.toBeNull()
  })
});
