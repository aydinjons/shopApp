import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedComponent } from './discounted.component';

describe('DiscountedComponent', () => {
  let component: DiscountedComponent;
  let fixture: ComponentFixture<DiscountedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
