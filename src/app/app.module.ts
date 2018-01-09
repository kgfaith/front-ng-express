import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {AuthModule} from "./auth/auth.module";
import {WccrModule} from "./features/wccr/wccr.module";

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
        WccrModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
