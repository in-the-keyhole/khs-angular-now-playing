import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from './movie.model';

@Component({
    selector: 'movie',
    template: `
        <div class="movie-detail" *ngIf="movie">
            <h2>{{movie.title}}</h2>
            <h3>{{movie.overview}}</h3>
            <span class="close" [routerLink]="['/movies']"></span>
            <img src="/assets/images/backdrops{{movie.backdrop_path}}"/>
        </div>
    `
})
export class MovieComponent implements OnInit {

    public movie: Movie;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.forEach((data: { movie: Movie }) =>
            this.movie = data.movie
        );
    }
}
