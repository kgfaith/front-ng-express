import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TableAnalysisComponent } from './containers/table-analysis/table-analysis.component';

export const ROUTES:Routes = [
  {
    path: '',
    component: TableAnalysisComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [TableAnalysisComponent]
})
export class TableAnalysisModule { }
