import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LcrComponent } from './containers/lcr/lcr.component';

export const ROUTES:Routes = [
    {
        path: '',
        component: LcrComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [LcrComponent]
})
export class LcrModule {
}
