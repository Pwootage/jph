///ts:ref=angular2.d.ts
/// <reference path="../typings/angular2/angular2.d.ts"/> ///ts:ref:generated

import {Component, View, bootstrap} from "angular2/angular2"

@Component({
    selector: "jph-main-view"
})
@View({
    templateUrl: "/components/JPHMainView.html"
})
export class JPHMainViewComponent {
    letters: string[];

    vowels: string[];

    constructor() {

    }
}