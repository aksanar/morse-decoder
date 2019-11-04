const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const morseCode = [
    {code: '0000001011', letter: 'A'}, {code: '0011101010', letter: 'B'},
    {code: '0011101110', letter: 'C'}, {code: '0000111010', letter: 'D'},
    {code: '0000000010', letter: 'E'}, {code: '0010101110', letter: 'F'},
    {code: '0000111110', letter: 'G'}, {code: '0010101010', letter: 'H'},
    {code: '0000001010', letter: 'I'}, {code: '0010111111', letter: 'J'},
    {code: '0000111011', letter: 'K'}, {code: '0010111010', letter: 'L'},
    {code: '0000001111', letter: 'M'}, {code: '0000001110', letter: 'N'},
    {code: '0000111111', letter: 'O'}, {code: '0010111110', letter: 'P'},
    {code: '0011111011', letter: 'Q'}, {code: '0000101110', letter: 'R'},
    {code: '0000101010', letter: 'S'}, {code: '0000000011', letter: 'T'},
    {code: '0000101011', letter: 'U'}, {code: '0010101011', letter: 'V'},
    {code: '0000101111', letter: 'W'}, {code: '0011101011', letter: 'X'},
    {code: '0011101111', letter: 'Y'}, {code: '0011111010', letter: 'Z'},
    {code: '1011111111', letter: '1'}, {code: '1010111111', letter: '2'},
    {code: '1010101111', letter: '3'}, {code: '1010101011', letter: '4'},
    {code: '1010101010', letter: '5'}, {code: '1110101010', letter: '6'},
    {code: '1111101010', letter: '7'}, {code: '1111111010', letter: '8'},
    {code: '1111111110', letter: '9'}, {code: '1111111111', letter: '0'},
    {code: '**********', letter: ' '}];

function decode(expr) {
    // write your solution here
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let alfa = expr.substr(i, 10);
        for (let j = 0; j < morseCode.length; j++) {
            if (morseCode[j].code == alfa) {
                result += morseCode[j].letter.toLowerCase();
            }
        }
    }
    return result;
}

module.exports = {
    decode
}