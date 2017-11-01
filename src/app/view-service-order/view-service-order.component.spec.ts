import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceOrderComponent } from './view-service-order.component';

describe('ViewServiceOrderComponent', () => {
  let component: ViewServiceOrderComponent;
  let fixture: ComponentFixture<ViewServiceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServiceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
