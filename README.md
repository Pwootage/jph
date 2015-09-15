#JPH - Japanese Helper

This is a simple project to help practice japanese sight-reading (maybe more at some point). 

We're using angluar 2 (which is in beta/somewhat unstable) and polymer-paper so this will
likely not support most older browsers (it should work in the newer browsers just fine,
though)

It is available at [pwootage.com/jph](https://pwootage.com/jph/) or is may be compiled and
ran locally

# Developing

## Dependencies (installable with npm)
* bower
* tsd
* grunt-cli
* http-server *optional*

## Useful commands
* Install web dependencies: `npm install && bower install && tsd install`
* Compile: `grunt`
* Auto-compile changes: `grunt watch`
* Serve on [localhost:8080](localhost:8080) `http-server -c-1`

# Known Issues/Ongoing Development

The word list is in desperate need of cleanup and enhancing, it is (currently) a pretty basic
parse of a [wiktionary list](https://en.wiktionary.org/wiki/Appendix:1000_Japanese_basic_words)
and is actually pretty messy (and likely not even completely correct).

# Licence

[Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/3.0/)

The word list is originally parsed from
[Appendix:1000 Japanese basic words](https://en.wiktionary.org/wiki/Appendix:1000_Japanese_basic_words), also licenced
under [Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/3.0/), and has been
modified for the purposes of this project.