import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProcessPageComponent } from './service-process-page.component';

describe('ServiceProcessPageComponent', () => {
  let component: ServiceProcessPageComponent;
  let fixture: ComponentFixture<ServiceProcessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProcessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
