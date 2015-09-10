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
            //s
            {romaji: "sa", kana: "さ"},
            {romaji: "shi", kana: "し"},
            {romaji: "su", kana: "す"},
            {romaji: "se", kana: "せ"},
            {romaji: "so", kana: "そ"},
            //t
            {romaji: "ta", kana: "た"},
            {romaji: "chi", kana: "ち"},
            {romaji: "tsu", kana: "つ"},
            {romaji: "te", kana: "て"},
            {romaji: "to", kana: "と"},
            //n
            {romaji: "na", kana: "な"},
            {romaji: "ni", kana: "に"},
            {romaji: "nu", kana: "ぬ"},
            {romaji: "ne", kana: "ね"},
            {romaji: "no", kana: "の"},
            //h
            {romaji: "ha", kana: "は"},
            {romaji: "hi", kana: "ひ"},
            {romaji: "fu", kana: "ふ"},
            {romaji: "he", kana: "へ"},
            {romaji: "ho", kana: "ほ"},
            //m
            {romaji: "ma", kana: "ま"},
            {romaji: "mi", kana: "み"},
            {romaji: "mu", kana: "む"},
            {romaji: "me", kana: "ね"},
            {romaji: "mo", kana: "も"},
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
            //w
            {romaji: "wa", kana: "わ"},
            {romaji: "wo", kana: "を"},
            //n
            {romaji: "n", kana: "ん"}
        ]
    }
    export class All {
        public static chars: JPChar[] = Hirigana.chars;
    }
}