export module JPChars {
    export interface JPChar {
        romaji: string;
        kana: string;
    }
    export class All {
        public static random():JPChar {
            var i = Math.floor(Math.random() * All.chars.length);
            return All.chars[i];
        }

        public static chars:JPChar[] = [
            //vowels
            {romaji: "a", kana: "あ"},
            {romaji: "i", kana: "い"},
            {romaji: "u", kana: "う"},
            {romaji: "e", kana: "え"},
            {romaji: "o", kana: "お"},
            //k
            {romaji: "ka", kana: "か"},
            {romaji: "ki", kana: "き"},
            {romaji: "ku", kana: "く"},
            {romaji: "ke", kana: "け"},
            {romaji: "ko", kana: "こ"},
            {romaji: "kya", kana: "きゃ"},
            {romaji: "kyu", kana: "きゅ"},
            {romaji: "kyo", kana: "きょ"},
            //s
            {romaji: "sa", kana: "さ"},
            {romaji: "shi", kana: "し"},
            {romaji: "su", kana: "す"},
            {romaji: "se", kana: "せ"},
            {romaji: "so", kana: "そ"},
            {romaji: "sha", kana: "しゃ"},
            {romaji: "shu", kana: "しゅ"},
            {romaji: "sho", kana: "しお"},
            //t
            {romaji: "ta", kana: "た"},
            {romaji: "chi", kana: "ち"},
            {romaji: "tsu", kana: "つ"},
            {romaji: "ltsu", kana: "っ"},
            {romaji: "te", kana: "て"},
            {romaji: "to", kana: "と"},
            {romaji: "cha", kana: "ちゃ"},
            {romaji: "chi", kana: "ちゅ"},
            {romaji: "cho", kana: "ちょ"},
            //n
            {romaji: "na", kana: "な"},
            {romaji: "ni", kana: "に"},
            {romaji: "nu", kana: "ぬ"},
            {romaji: "ne", kana: "ね"},
            {romaji: "no", kana: "の"},
            {romaji: "nya", kana: "にゃ"},
            {romaji: "nyu", kana: "にゅ"},
            {romaji: "nyo", kana: "にょ"},
            //h
            {romaji: "ha", kana: "は"},
            {romaji: "hi", kana: "ひ"},
            {romaji: "fu", kana: "ふ"},
            {romaji: "he", kana: "へ"},
            {romaji: "ho", kana: "ほ"},
            {romaji: "hya", kana: "ひゃ"},
            {romaji: "hyu", kana: "ひゅ"},
            {romaji: "hyo", kana: "ひょ"},
            //m
            {romaji: "ma", kana: "ま"},
            {romaji: "mi", kana: "み"},
            {romaji: "mu", kana: "む"},
            {romaji: "me", kana: "ね"},
            {romaji: "mo", kana: "も"},
            {romaji: "mya", kana: "みゃ"},
            {romaji: "myu", kana: "みゅ"},
            {romaji: "myo", kana: "みょ"},
            //y
            {romaji: "ya", kana: "や"},
            {romaji: "yu", kana: "ゆ"},
            {romaji: "yo", kana: "よ"},
            {romaji: "lya", kana: "ゃ"},
            {romaji: "lyu", kana: "ゅ"},
            {romaji: "lyo", kana: "ょ"},
            //r
            {romaji: "ra", kana: "ら"},
            {romaji: "ri", kana: "り"},
            {romaji: "ru", kana: "る"},
            {romaji: "re", kana: "れ"},
            {romaji: "ro", kana: "ろ"},
            {romaji: "rya", kana: "りゃ"},
            {romaji: "ryu", kana: "りゅ"},
            {romaji: "ryo", kana: "りょ"},
            //w
            {romaji: "wa", kana: "わ"},
            {romaji: "wo", kana: "を"},
            //n
            {romaji: "n'", kana: "ん"},
            //g
            {romaji: "ga", kana: "が"},
            {romaji: "gi", kana: "ぎ"},
            {romaji: "gu", kana: "ぐ"},
            {romaji: "ge", kana: "げ"},
            {romaji: "go", kana: "ご"},
            {romaji: "gya", kana: "ぎゃ"},
            {romaji: "gyu", kana: "ぎゅ"},
            {romaji: "gyo", kana: "ぎょ"},
            //z
            {romaji: "za", kana: "ざ"},
            {romaji: "ji", kana: "じ"},
            {romaji: "zu", kana: "ず"},
            {romaji: "ze", kana: "ぜ"},
            {romaji: "zo", kana: "ぞ"},
            {romaji: "ja", kana: "じゃ"},
            {romaji: "ju", kana: "じゅ"},
            {romaji: "yo", kana: "じょ"},
            //d
            {romaji: "da", kana: "だ"},
            {romaji: "dzu", kana: "づ"},
            {romaji: "du", kana: "づ"},
            {romaji: "de", kana: "で"},
            {romaji: "do", kana: "ど"},
            //b
            {romaji: "ba", kana: "ば"},
            {romaji: "bi", kana: "び"},
            {romaji: "bu", kana: "ぶ"},
            {romaji: "be", kana: "べ"},
            {romaji: "bo", kana: "ぼ"},
            {romaji: "bya", kana: "びゃ"},
            {romaji: "byu", kana: "びゅ"},
            {romaji: "byo", kana: "びょ"},
            //p
            {romaji: "pa", kana: "ぱ"},
            {romaji: "pi", kana: "ぴ"},
            {romaji: "pu", kana: "ぷ"},
            {romaji: "pe", kana: "ぺ"},
            {romaji: "po", kana: "ぽ"},
            {romaji: "pya", kana: "ぴゃ"},
            {romaji: "pyu", kana: "ぴゅ"},
            {romaji: "pyo", kana: "ぴょ"},
            ////KATAKANA////
            //a
            {romaji: "A", kana: "ア"},
            {romaji: "I", kana: "イ"},
            {romaji: "U", kana: "ウ"},
            {romaji: "E", kana: "エ"},
            {romaji: "O", kana: "オ"},
            //k
            {romaji: "KA", kana: "カ"},
            {romaji: "KI", kana: "キ"},
            {romaji: "KU", kana: "ク"},
            {romaji: "KE", kana: "ケ"},
            {romaji: "KO", kana: "コ"},
            {romaji: "YA", kana: "キャ"},
            {romaji: "YU", kana: "キュ"},
            {romaji: "YO", kana: "キョ"},
            //s
            {romaji: "SA", kana: "サ"},
            {romaji: "SHI", kana: "シ"},
            {romaji: "SU", kana: "ス"},
            {romaji: "SE", kana: "セ"},
            {romaji: "SO", kana: "ソ"},
            {romaji: "SHA", kana: "シャ"},
            {romaji: "SHU", kana: "シュ"},
            {romaji: "SHO", kana: "ショ"},
            //t
            {romaji: "TA", kana: "タ"},
            {romaji: "CHI", kana: "チ"},
            {romaji: "TSU", kana: "ツ"},
            {romaji: "LTSU", kana: "ッ"},
            {romaji: "TE", kana: "テ"},
            {romaji: "TO", kana: "ト"},
            {romaji: "CHA", kana: "チャ"},
            {romaji: "CHU", kana: "チュ"},
            {romaji: "CHO", kana: "チョ"},
            //n
            {romaji: "NA", kana: "ナ"},
            {romaji: "NI", kana: "ニ"},
            {romaji: "NU", kana: "ヌ"},
            {romaji: "NE", kana: "ネ"},
            {romaji: "NO", kana: "ノ"},
            {romaji: "NYA", kana: "ニャ"},
            {romaji: "NYU", kana: "ニュ"},
            {romaji: "NYO", kana: "ニョ"},
            //h
            {romaji: "HA", kana: "ナ"},
            {romaji: "HI", kana: "ニ"},
            {romaji: "FU", kana: "ヌ"},
            {romaji: "HE", kana: "ネ"},
            {romaji: "HO", kana: "ノ"},
            {romaji: "HYA", kana: "ニャ"},
            {romaji: "HYU", kana: "ニュ"},
            {romaji: "HYO", kana: "ニョ"},
            //m
            {romaji: "MA", kana: "マ"},
            {romaji: "MI", kana: "ミ"},
            {romaji: "MU", kana: "ム"},
            {romaji: "ME", kana: "メ"},
            {romaji: "MO", kana: "モ"},
            {romaji: "MYA", kana: "ミャ"},
            {romaji: "MYU", kana: "ミュ"},
            {romaji: "MYO", kana: "ミョ"},
            //y
            {romaji: "YA", kana: "ヤ"},
            {romaji: "YU", kana: "ユ"},
            {romaji: "YO", kana: "ヨ"},
            //r
            {romaji: "RA", kana: "ラ"},
            {romaji: "RI", kana: "リ"},
            {romaji: "RU", kana: "ル"},
            {romaji: "RE", kana: "レ"},
            {romaji: "RO", kana: "ロ"},
            {romaji: "RYA", kana: "リャ"},
            {romaji: "RYU", kana: "リュ"},
            {romaji: "RYO", kana: "リョ"},
            //w
            {romaji: "WA", kana: "ワ"},
            {romaji: "WO", kana: "ヲ"},
            //g
            {romaji: "GA", kana: "ガ"},
            {romaji: "GI", kana: "ギ"},
            {romaji: "GU", kana: "グ"},
            {romaji: "GE", kana: "ゲ"},
            {romaji: "GO", kana: "ゴ"},
            {romaji: "GYA", kana: "ギャ"},
            {romaji: "GYU", kana: "ギュ"},
            {romaji: "GYO", kana: "ギョ"},
            //z
            {romaji: "ZA", kana: "ザ"},
            {romaji: "JI", kana: "ジ"},
            {romaji: "ZU", kana: "ズ"},
            {romaji: "ZE", kana: "ゼ"},
            {romaji: "ZO", kana: "ゾ"},
            {romaji: "JA", kana: "ジャ"},
            {romaji: "JU", kana: "ジュ"},
            {romaji: "JO", kana: "ジョ"},
            //d
            {romaji: "DA", kana: "ダ"},
            {romaji: "DI", kana: "ヂ"}, //also ji, but can't be typed as so
            {romaji: "DU", kana: "ヅ"}, //also zu
            {romaji: "DE", kana: "ド"},
            {romaji: "DO", kana: "ド"},
            {romaji: "DYA", kana: "ヂャ"}, //also ja
            {romaji: "DYU", kana: "ヂュ"}, //also ju
            {romaji: "DYO", kana: "ヂョ"}, //also jo
            //b
            {romaji: "BA", kana: "バ"},
            {romaji: "BI", kana: "ビ"},
            {romaji: "BU", kana: "ブ"},
            {romaji: "BE", kana: "ベ"},
            {romaji: "BO", kana: "ボ"},
            {romaji: "BYA", kana: "ビャ"},
            {romaji: "BYU", kana: "ビュ"},
            {romaji: "BYO", kana: "ビョ"},
            //p
            {romaji: "PA", kana: "パ"},
            {romaji: "PI", kana: "ピ"},
            {romaji: "PU", kana: "プ"},
            {romaji: "PE", kana: "ペ"},
            {romaji: "PO", kana: "ポ"},
            {romaji: "PYA", kana: "ピャ"},
            {romaji: "PYU", kana: "ピュ"},
            {romaji: "PYO", kana: "ピョ"},
            //n
            {romaji: "N'", kana: "パ"},
        ]
    }
}