import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MoviesComponent} from './movies.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        MoviesComponent
    ],
    exports: [
        MoviesComponent
    ]
})
export class MovieModule {

}