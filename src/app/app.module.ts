import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';

// feature modules
import {AuthModule} from './auth/auth.module';
import {DnaModule} from './dna/dna.module';

// containers
import { AppComponent } from './app.component';

// components
import { AppNavComponent } from './layout/components/app-nav/app-nav.component';

// services
import {DataService} from './dna/shared/services/data.service';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AppNavComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        ChartsModule,
        AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/]),
        AuthModule,
        DnaModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
