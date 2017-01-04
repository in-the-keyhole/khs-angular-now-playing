import {Routes} from '@angular/router';
import {MoviesComponent} from './movies.component';
import {MovieComponent} from './movie.component';
import {MovieResolve} from './movie-resolve.service';
import {AuthGuard} from '../login/auth-guard.service';

export const movieRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent, canActivate: [AuthGuard]},
    {path: 'movies/:id', component: MovieComponent, resolve: {movie: MovieResolve}, canActivate: [AuthGuard]}
];