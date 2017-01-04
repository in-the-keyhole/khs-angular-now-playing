import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {MovieModule} from './movie/movie.module';
import {routing, routingProviders} from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        LoginModule,
        MovieModule,
        routing
    ],
    providers: [
        routingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
