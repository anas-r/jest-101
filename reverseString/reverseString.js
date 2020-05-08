function reverseString(string) {
    const stringBuilder = string.split('');
    const reverseStringArray = stringBuilder.map((char,index) => stringBuilder[stringBuilder.length - (index+1)]);
    return reverseStringArray.join('');
}

module.exports = reverseString;



