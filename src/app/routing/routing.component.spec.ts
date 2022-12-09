import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RoutingComponent} from './routing.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Observable} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

class RouterStub {
  navigate(path: string[]) {
  }
}

class ActivatedRouterStub {
  // @ts-ignore
  params: Observable<Params>
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
});
