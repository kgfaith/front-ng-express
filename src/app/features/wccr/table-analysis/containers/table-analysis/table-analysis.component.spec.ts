import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnalysisComponent } from './table-analysis.component';

describe('TableAnalysisComponent', () => {
  let component: TableAnalysisComponent;
  let fixture: ComponentFixture<TableAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
