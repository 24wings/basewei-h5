import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineHouseComponent } from './nine-house.component';

describe('NineHouseComponent', () => {
  let component: NineHouseComponent;
  let fixture: ComponentFixture<NineHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
