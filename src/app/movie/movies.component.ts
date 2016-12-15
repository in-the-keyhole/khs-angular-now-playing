import {Component, OnInit} from '@angular/core';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';

@Component({
    selector: 'movies',
    template: `
        <div class="movie-container">
            <h2>Now Playing</h2>
            <ul>
                <li *ngFor="let movie of movies">
                    <img src="/assets/images/posters{{movie.poster_path}}"/>
                </li>
            </ul>
        </div>
    `,
    providers: [MovieService]
})
export class MoviesComponent implements OnInit {

    private movies: Movie[];

    constructor(private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.movieService.nowPlaying().subscribe(movies =>
            this.movies = movies
        )
    }
}