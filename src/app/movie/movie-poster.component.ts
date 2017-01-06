import {Component, Input} from '@angular/core';
import {Movie} from './movie.model';

@Component({
    selector: 'movie-poster',
    template: `<img src="/assets/images/posters{{movie.poster_path}}"/>`
})
export class MoviePosterComponent {

    @Input() movie: Movie;
}