function shiftChar(char,offset) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const index = alphabet.findIndex(c => c === char);
    return alphabet[((index + offset) % 26 + 26) % 26];
}

export function caesarCypher(string,offset) {
    const stringBuilder = string.split('')
    const caesarNoCase = stringBuilder.map(char => char.toLowerCase()).map(char => (char.match(/[a-z]/)) ? shiftChar(char,offset) : char);
    return caesarNoCase.map((char,index) => (stringBuilder[index] === stringBuilder[index].toUpperCase()) ? char.toUpperCase() :char ).join('')
}