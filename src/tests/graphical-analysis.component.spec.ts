import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalAnalysisComponent } from './../app/features/wccr/graphical-analysis/containers/graphical-analysis/graphical-analysis.component.ts';

describe('GraphicalAnalysisComponent', () => {
  let component: GraphicalAnalysisComponent;
  let fixture: ComponentFixture<GraphicalAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
