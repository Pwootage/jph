///ts:ref=angular2.d.ts
/// <reference path="../typings/angular2/angular2.d.ts"/> ///ts:ref:generated
///ts:ref=jp-chars.ts
/// <reference path="../data/jp-chars.ts"/> ///ts:ref:generated
///ts:ref=rx.d.ts
/// <reference path="../typings/rx/rx.d.ts"/> ///ts:ref:generated
///ts:ref=words.ts
/// <reference path="../data/words.ts"/> ///ts:ref:generated

import {Component, View, bootstrap, NgFor, NgModel} from "angular2/angular2"
import {JPChars} from "data/jp-chars"
import {JPWords} from "data/words"
import {JPHHiriganaTableComponent} from "components/JPHHiriganaTable"

@Component({
    selector: "jph-hirigana"
})
@View({
    templateUrl: "/components/JPHHirigana.html",
    directives: [NgFor, JPHHiriganaTableComponent]
})
export class JPHHiriganaComponent {
    chars:JPChars.JPChar[] = [];
    words:JPWords.JPWord[] = [];
    enabledCharsInput:string;
    enabledChars:Array<JPChars.JPChar> = [];

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
        this.updateChars({value: localStorage['enabledChars'] || ''});
        this.fillArray();
    }

    public fillArray() {
        while (this.chars.length < 10) {
            var char;
            do {
                char = JPChars.Hirigana.random()
            } while (!this.charEnabled(char) || (this.chars.length > 0 && (char.kana == this.chars[this.chars.length - 1].kana)));
            this.chars.push(char);
        }
    }

    public processInput(inp) {
        var val = inp.value || '';
        if (val.indexOf(this.chars[0].kana) >= 0 || val.indexOf(this.chars[0].romaji) >= 0) {
            inp.value = '';
            this.chars = this.chars.slice(1);
            this.fillArray();
        }
    }

    public updateChars(inp) {
        var value = inp.value || '';
        if (value.length == 0) value = localStorage['enabledChars'] || '';
        this.enabledChars = JPChars.All.chars.filter((char: JPChars.JPChar) =>
            value.indexOf(char.kana) >= 0 || value.indexOf(char.romaji) >= 0
        );
        this.chars = [];
        this.fillArray();
        this.enabledCharsInput = this.enabledChars.map(c => c.kana).reduce((a, b) => a + b, '');
        localStorage['enabledChars'] = this.enabledCharsInput;
        this.words = JPWords.Words.words.filter(v => {
            return v.kana.split('')
                .map(char => this.enabledCharsInput.indexOf(char) >= 0)
                .reduce((a, b) => a && b, true)
        });
    }

    private charEnabled(char:JPChars.JPChar) {
        if (this.enabledChars.length < 2) {
            return true;
        } else {
            return this.enabledChars.filter(c => c.kana == char.kana).length > 0;
        }
    }
}