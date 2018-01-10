import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'otc' },
            { path: 'otc', loadChildren: './otc/otc.module#OtcModule'},
            { path: 'collateral', loadChildren: './collateral/collateral.module#CollateralModule'}
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
export class HoldingsModule { }

