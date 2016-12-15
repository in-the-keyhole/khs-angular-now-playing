import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MoviesComponent} from './movies.component';
import {FormsModule} from '@angular/forms';
import {MoviePosterComponent} from './movie-poster.component';
import {RatingModule} from '../rating/rating.module';
import {RouterModule} from '@angular/router';
import {MovieComponent} from './movie.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule,
        RatingModule
    ],
    declarations: [
        MoviesComponent,
        MoviePosterComponent,
        MovieComponent
    ],
    exports: [
        MoviesComponent
    ]
})
export class MovieModule {

}