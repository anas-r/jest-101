function capitalize(string) {
    const stringBuilder = string.split('');
    const firstCharIndex = stringBuilder.findIndex(char => char.match(/[A-Za-z]/));
    stringBuilder[firstCharIndex] = stringBuilder[firstCharIndex].toUpperCase();
    return stringBuilder.join('');
}

module.exports = capitalize