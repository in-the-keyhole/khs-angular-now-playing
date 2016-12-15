import {Routes} from '@angular/router';
import {MoviesComponent} from './movies.component';
import {MovieComponent} from './movie.component';

export const movieRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieComponent}
];