import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OtcComponent } from './containers/otc/otc.component';

export const ROUTES:Routes = [
  {
    path: '',
    component: OtcComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [OtcComponent]
})
export class OtcModule { }
