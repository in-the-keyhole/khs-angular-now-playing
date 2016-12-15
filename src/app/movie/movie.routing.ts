import {Routes} from '@angular/router';
import {MoviesComponent} from './movies.component';
import {MovieComponent} from './movie.component';
import {MovieResolve} from './movie-resolve.service';

export const movieRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieComponent, resolve: {movie: MovieResolve}}
];