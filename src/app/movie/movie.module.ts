import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MoviesComponent} from './movies.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
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