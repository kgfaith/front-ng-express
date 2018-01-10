import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "./shared/shared.module";

export const ROUTES: Routes = [
    { path: 'wccr', loadChildren: './wccr/wccr.module#WccrModule' },
    { path: 'lcr', loadChildren: './lcr/lcr.module#LcrModule' },
    { path: 'holdings', loadChildren: './holdings/holdings.module#HoldingsModule' }
];


@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ],
    declarations: []
})
export class DnaModule {
}
