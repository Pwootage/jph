#JPH - Japanese Helper

This is a simple project to help practice japanese sight-reading (maybe more at some point). 

We're using angluar 2 (which is in beta/somewhat unstable) and polymer-paper so this will
likely not support most older browsers (it should work in the newer browsers just fine,
though)

It is available at [pwootage.com/jph](https://pwootage.com/jph/) or is may be compiled and
ran locally

# Contributing

Please keep the code style similar to the existing code style. Use types where reasonable in TypeScript,
and if you modify the UI, use [polymer-paper](https://elements.polymer-project.org/browse?package=paper-elements)
and stick to [material design](https://www.google.com/design/spec/material-design/introduction.html).

### Dependencies (installable with npm)
* bower
* tsd
* grunt-cli
* http-server *optional*

### Useful commands
* Install web dependencies: `npm install && bower install && tsd install`
* Compile: `grunt`
* Auto-compile changes: `grunt watch`
* Serve on [localhost:8080](localhost:8080) `http-server -c-1`

# Known Issues/Ongoing Development

The word list is in desperate need of cleanup and enhancing, it is (currently) a pretty basic
parse of a [wiktionary list](https://en.wiktionary.org/wiki/Appendix:1000_Japanese_basic_words)
and is actually pretty messy (and likely not even completely correct).

# Licence

### Content/text: 
[Creative Commons Attribution-ShareAlike 4.0 International License.](https://creativecommons.org/licenses/by-sa/4.0/)

### Software/Code:
```
The MIT License (MIT)

Copyright (c) 2015 Christopher Freestone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### Word List
The word list is originally parsed from
[Appendix:1000 Japanese basic words](https://en.wiktionary.org/wiki/Appendix:1000_Japanese_basic_words), licenced
under [Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/3.0/), and has been
modified significantly for the purposes of this project.