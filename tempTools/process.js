var fs = require('fs');

var words = JSON.parse(fs.readFileSync("japaneseWords.json", "utf-8"));

var src = words.collection1;
var res = [];
src.forEach(function(v) {
  var kana = v.property1.text;
  var kanji = v.property2.text;
  var meaning = v.property3;
  var romaji = v.property4;
  res.push({
    kana: kana,
    kanji: kanji,
    meaning: meaning,
    romaji: romaji
  });
});

fs.writeFileSync('out.json', JSON.stringify(res), "utf-8");
