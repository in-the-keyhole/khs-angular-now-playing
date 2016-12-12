import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MoviesComponent} from './movies.component';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
