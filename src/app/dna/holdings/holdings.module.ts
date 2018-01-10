import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {OtcComponent} from "./containers/otc/otc.component";
import {CollateralComponent} from "./containers/collateral/collateral.component";

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'otc' },
    { path: 'otc', component: OtcComponent},
    { path: 'collateral', component: CollateralComponent}
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(ROUTES)
  ],
  declarations: [
      OtcComponent,
      CollateralComponent
  ]
})
export class HoldingsModule { }

