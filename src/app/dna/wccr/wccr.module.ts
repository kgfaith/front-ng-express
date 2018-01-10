import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'table-analysis' },
      { path: 'table-analysis', loadChildren: './table-analysis/table-analysis.module#TableAnalysisModule'},
      { path: 'graphical-analysis', loadChildren: './graphical-analysis/graphical-analysis.module#GraphicalAnalysisModule'},
      { path: 'data-extrapolation', loadChildren: './data-extrapolation/data-extrapolation.module#DataExtrapolationModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class WccrModule {
}

