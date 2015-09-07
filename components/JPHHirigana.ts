///ts:ref=angular2.d.ts
/// <reference path="../typings/angular2/angular2.d.ts"/> ///ts:ref:generated
///ts:ref=jp-chars.ts
/// <reference path="../data/jp-chars.ts"/> ///ts:ref:generated

import {Component, View, bootstrap, NgFor} from "angular2/angular2"
import {JPChars} from "data/jp-chars"
import {JPHHiriganaTableComponent} from "components/JPHHiriganaTable"

@Component({
    selector: "jph-hirigana"
})
@View({
    templateUrl: "/components/JPHHirigana.html",
    directives: [NgFor, JPHHiriganaTableComponent]
})
export class JPHHiriganaComponent {
    chars:Array<JPChars.JPChar> = [];
    animationConfig = {
        entry: [{
            name: "fade-in-animation",
            timing: {
                delay: 500,
                duration: 100
            }
        }],
        exit: [{
            name: "fade-out-animation",
            duration: 100
        }]
    };

    constructor() {
        this.fillArray();
    }

    public fillArray() {
        while (this.chars.length < 10) {
            var char;
            do {
                char = JPChars.Hirigana.random()
            } while (this.chars.length > 0 && char.kana == this.chars[this.chars.length - 1].kana);
            this.chars.push(char);
        }
    }

    public processInput(inp) {
        var val = inp.value || '';
        if (val.indexOf(this.chars[0].k) >= 0 || val.indexOf(this.chars[0].romaji) >= 0) {
            inp.value = '';
            this.chars = this.chars.slice(1);
            this.fillArray();
        }
    }
}