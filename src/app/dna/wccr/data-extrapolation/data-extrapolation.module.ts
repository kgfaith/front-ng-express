import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DataExtrapolationComponent } from './containers/data-extrapolation/data-extrapolation.component';

export const ROUTES:Routes = [
  {
    path: '',
    component: DataExtrapolationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DataExtrapolationComponent]
})
export class DataExtrapolationModule { }
