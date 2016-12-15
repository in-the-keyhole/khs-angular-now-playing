import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MovieModule} from './movie/movie.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MovieModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
