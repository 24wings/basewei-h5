import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrderPageComponent } from './open-order-page.component';

describe('OpenOrderPageComponent', () => {
  let component: OpenOrderPageComponent;
  let fixture: ComponentFixture<OpenOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
