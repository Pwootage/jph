///ts:ref=angular2.d.ts
/// <reference path="../typings/angular2/angular2.d.ts"/> ///ts:ref:generated
///ts:ref=jp-chars.ts
/// <reference path="../data/jp-chars.ts"/> ///ts:ref:generated

import {Component, View, bootstrap, NgFor} from "angular2/angular2"

@Component({
    selector: "jph-hirigana-table"
})
@View({
    templateUrl: "/components/JPHHiriganaTable.html",
    directives: [NgFor]
})
export class JPHHiriganaTableComponent {

}