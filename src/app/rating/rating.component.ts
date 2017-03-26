import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'rating',
    template: `
        <span class="rating">
            <span class="star" (click)="setStars(5)"><i class="fa fa-lg" [ngClass]="starClass(5)"></i></span>
            <span class="star" (click)="setStars(4)"><i class="fa fa-lg" [ngClass]="starClass(4)"></i></span>
            <span class="star" (click)="setStars(3)"><i class="fa fa-lg" [ngClass]="starClass(3)"></i></span>
            <span class="star" (click)="setStars(2)"><i class="fa fa-lg" [ngClass]="starClass(2)"></i></span>
            <span class="star" (click)="setStars(1)"><i class="fa fa-lg" [ngClass]="starClass(1)"></i></span>
        </span>
    `,
    styles: [`
        .rating {
            position: absolute;
            bottom: 5px;
            left: 5px;
            padding: 10px;
        
            unicode-bidi: bidi-override;
            direction: rtl;
            cursor: pointer;
        }
        
        .star .fa-star {
            color: yellow;
        }
        
        .star:hover,
        .star:hover ~ .star {
            color: yellow;
        }
    `]
})
export class RatingComponent {

    @Input() private stars: number;
    @Output() private changed:EventEmitter<number> = new EventEmitter<number>();

    public starClass(ordinal: number): string {
        if (this.stars > (ordinal - 1)) {
            return 'fa-star';
        }

        return 'fa-star-o';
    }

    setStars(stars: number): void {
        this.stars = stars;
        this.changed.emit(stars);
    }
}
