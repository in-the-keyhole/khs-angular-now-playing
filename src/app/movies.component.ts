import {Component} from '@angular/core';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';

@Component({
    selector: 'movies',
    template: `
        <div class="movie-container">
            <h2>Now Playing</h2>
            <ul>
                <li *ngFor="let movie of movies">{{movie.title}}</li>
            </ul>
        </div>
    `,
    providers: [MovieService]
})
export class MoviesComponent {

    private movies: Movie[];

    constructor(movieService: MovieService) {
        this.movies = movieService.nowPlaying();
    }
}