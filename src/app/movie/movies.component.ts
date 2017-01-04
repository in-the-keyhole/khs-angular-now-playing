import {Component, OnInit} from '@angular/core';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';
import {AuthService} from '../login/auth.service';

@Component({
    selector: 'movies',
    template: `
        <div class="movie-container">
            <h2>Now Playing</h2>
            <button (click)="logout()">Logout</button>
            <input type="text" placeholder="Filter..." [(ngModel)]="filterText" (keyup)="applyFilter()"/>
            <ul>
                <li *ngFor="let movie of filteredMovies">
                    <movie-poster [movie]="movie" [routerLink]="['/movies', movie.id]"></movie-poster>
                    <rating [stars]="movie.rating || 0" (changed)="ratingChanged(movie, $event)"></rating>
                </li>
            </ul>
        </div>
    `
})
export class MoviesComponent implements OnInit {

    private movies: Movie[];
    private filteredMovies: Movie[];
    private filterText: string;

    constructor(private movieService: MovieService, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.movieService.nowPlaying().subscribe(movies => {
            this.movies = movies;
            this.filteredMovies = movies;
        })
    }

    applyFilter(): void {
        this.filteredMovies = this.movies.filter(movie =>
            movie.title.toLowerCase().match(this.filterText.toLowerCase()) != null
        )
    }

    ratingChanged(movie: Movie, rating: number) {
        movie.rating = rating;
        this.movieService.updateMovie(movie).subscribe();
    }

    logout(): void {
        this.authService.logout();
    }
}