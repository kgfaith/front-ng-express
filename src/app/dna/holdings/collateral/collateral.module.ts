import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CollateralComponent } from './containers/collateral/collateral.component';

export const ROUTES:Routes = [
    {
        path: '',
        component: CollateralComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [CollateralComponent]
})
export class CollateralModule {
}
