import {TestBed, ComponentFixture} from '@angular/core/testing';
import {MoviePosterComponent} from './movie-poster.component';
import {By} from '@angular/platform-browser';
import {Movie} from './movie.model';
import {DebugElement} from '@angular/core';

describe('MoviePosterComponent', () => {

    let component;
    let imgElement: DebugElement;
    let mockMovie: Movie = {
        id: 1,
        title: 'Million Dollar Baby',
        rating: 5,
        overview: '',
        poster_path: 'test.png',
        backdrop_path: ''
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MoviePosterComponent]
        });

        let fixture: ComponentFixture<MoviePosterComponent> = TestBed.createComponent(MoviePosterComponent);
        component = fixture.componentInstance;
        component.movie = mockMovie;

        imgElement = fixture.debugElement.query(By.css('img'));
        fixture.detectChanges(); // trigger initial data binding
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should have a movie associated to the component', () => {
        expect(component.movie).toBe(mockMovie);
    });

    it('should assign the img.src attribute from the movie.poster_path', () => {
        const expectedPosterPath = mockMovie.poster_path;
        expect(imgElement.nativeElement.src).toContain(expectedPosterPath);
    });
});