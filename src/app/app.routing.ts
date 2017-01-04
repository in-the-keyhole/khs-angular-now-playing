import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {movieRoutes} from './movie/movie.routing';
import {AuthGuard, AuthService, loginRoutes, authProviders} from './login';

const routes: Routes = [
    ...movieRoutes,
    ...loginRoutes
];

export const routingProviders = [
    ...authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);