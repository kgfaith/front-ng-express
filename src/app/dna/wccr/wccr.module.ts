import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// containers
import {TableAnalysisComponent} from "./containers/table-analysis/table-analysis.component";
import {DataExtrapolationComponent} from "./containers/data-extrapolation/data-extrapolation.component";
import {GraphicalAnalysisComponent} from "./containers/graphical-analysis/graphical-analysis.component";

export const ROUTES:Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'table-analysis'},
    {path: 'table-analysis', component: TableAnalysisComponent},
    {path: 'graphical-analysis', component: GraphicalAnalysisComponent},
    {path: 'data-extrapolation', component: DataExtrapolationComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        TableAnalysisComponent,
        GraphicalAnalysisComponent,
        DataExtrapolationComponent
    ]
})
export class WccrModule {
}

