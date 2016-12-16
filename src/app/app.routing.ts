import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {movieRoutes} from './movie/movie.routing';
import {loginRoutes} from './login/login.routing';

const routes: Routes = [
    ...movieRoutes,
    ...loginRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);