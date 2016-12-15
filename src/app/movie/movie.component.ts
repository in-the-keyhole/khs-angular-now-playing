import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';

@Component({
    selector: 'movie',
    template: `
        <div class="movie-detail" *ngIf="movie">
            <h2>{{movie.title}}</h2>
            <h3>{{movie.overview}}</h3>
            <span class="close" [routerLink]="['/movies']"></span>
            <img src="/assets/images/backdrops{{movie.backdrop_path}}"/>
        </div>
    `,
    providers: [
        MovieService
    ]
})
export class MovieComponent implements OnInit {

    private movie: Movie;

    constructor(private route: ActivatedRoute, private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params =>
            this.movieService.movie(params['id']).subscribe(movie =>
                this.movie = movie
            )
        )
    }
}