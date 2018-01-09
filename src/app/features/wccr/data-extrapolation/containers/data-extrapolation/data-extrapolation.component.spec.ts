import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExtrapolationComponent } from './data-extrapolation.component';

describe('DataExtrapolationComponent', () => {
  let component: DataExtrapolationComponent;
  let fixture: ComponentFixture<DataExtrapolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataExtrapolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataExtrapolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
