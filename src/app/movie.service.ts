import {Injectable} from '@angular/core';
import {Movie} from './movie.model';

@Injectable()
export class MovieService {

    nowPlaying(): Movie[] {
        return [
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