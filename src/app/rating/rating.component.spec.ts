import {
    async, ComponentFixture, TestBed
} from '@angular/core/testing';

import {By}           from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {RatingComponent} from './rating.component';

describe('RatingComponent: inside a test host', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let starEls: DebugElement[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RatingComponent, TestHostComponent], // declare both
        }).compileComponents();
    }));

    beforeEach(() => {
        // create TestHostComponent instead of RatingComponent
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        let ratingEl = fixture.debugElement.query(By.css('.rating')); // find .rating element
        starEls = ratingEl.queryAll(By.css('.star')); // find .star elements
        fixture.detectChanges(); // trigger initial data binding
    });

    it('should display 4 stars', () => {
        expect(starEls[0].query(By.css('.fa-star'))).toBe(null, 'star should be off');
        expect(starEls[1].query(By.css('.fa-star'))).not.toBe(null, 'star should be on');
        expect(starEls[2].query(By.css('.fa-star'))).not.toBe(null, 'star should be on');
        expect(starEls[3].query(By.css('.fa-star'))).not.toBe(null, 'star should be on');
        expect(starEls[4].query(By.css('.fa-star'))).not.toBe(null, 'star should be on');
    });

    it('should raise selected event when clicked', () => {
        // simulate click of 5th star
        click(starEls[0]);
        expect(testHost.stars).toBe(5);
    });
});

import {Component} from '@angular/core';

@Component({
    template: `<rating [stars]="4"  (changed)="onChanged($event)"></rating>`
})
class TestHostComponent {
    stars = 4;

    onChanged(stars: number) {
        this.stars = stars;
    }
}

// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
const ButtonClickEvents = {
    left:  { button: 0 },
    right: { button: 2 }
};

/** Simulate element click. Defaults to mouse left-button click event. */
function click(el: DebugElement, eventObj: any = ButtonClickEvents.left): void {
    el.triggerEventHandler('click', eventObj);
}