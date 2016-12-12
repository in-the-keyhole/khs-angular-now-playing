import {Component} from '@angular/core';
import {Movie} from './movie.model';

@Component({
    selector: 'movies',
    template: `
        <div class="movie-container">
            <h2>Now Playing</h2>
            <ul>
                <li *ngFor="let movie of movies">{{movie.title}}</li>
            </ul>
        </div>
    `
})
export class MoviesComponent {

    private movies: Movie[];

    constructor() {
        this.movies = [
            {
                id: 1,
                title: 'The Dark Knight',
                overview: ''
            },
            {
                id: 2,
                title: 'Suicide Squad',
                overview: ''
            }
        ];
    }
}