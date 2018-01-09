import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {AuthModule} from "./auth/auth.module";
import {WccrModule} from "./dna/wccr/wccr.module";
import {LcrModule} from "./dna/lcr/lcr.module";
import {HoldingsModule} from "./dna/holdings/holdings.module";


export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        AuthModule,
        WccrModule,
        LcrModule,
        HoldingsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
