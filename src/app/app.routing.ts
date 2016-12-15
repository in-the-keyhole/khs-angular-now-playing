import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {movieRoutes} from './movie/movie.routing';

const routes: Routes = [
    ...movieRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);