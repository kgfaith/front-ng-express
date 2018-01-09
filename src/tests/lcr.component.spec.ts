import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcrComponent } from './../app/dna/lcr/containers/lcr/lcr.component';

describe('LcrComponent', () => {
  let component: LcrComponent;
  let fixture: ComponentFixture<LcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
