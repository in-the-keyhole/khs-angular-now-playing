import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MoviesComponent} from './movies.component';
import {FormsModule} from '@angular/forms';
import {MoviePosterComponent} from './movie-poster.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        MoviesComponent,
        MoviePosterComponent
    ],
    exports: [
        MoviesComponent
    ]
})
export class MovieModule {

}