import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GraphicalAnalysisComponent } from './containers/graphical-analysis/graphical-analysis.component';

export const ROUTES:Routes = [
  {
    path: '',
    component: GraphicalAnalysisComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [GraphicalAnalysisComponent]
})
export class GraphicalAnalysisModule { }
