export module JPChars {
    export interface JPChar {
        romaji: string;
        kana: string;
    }
    export class Hirigana {
        public static random(): JPChar {
            var i = Math.floor(Math.random() * Hirigana.chars.length);
            return Hirigana.chars[i];
        }

        public static chars: JPChar[] = [
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
            {romaji: "n", kana: "ん"},
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
        ]
    }
    export class All {
        public static chars: JPChar[] = Hirigana.chars;
    }
}