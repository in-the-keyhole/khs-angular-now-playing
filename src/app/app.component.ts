import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<h1>Hello World from {{name}}!</h1>'
})
export class AppComponent {

    private name:string = 'Angular 2';
}