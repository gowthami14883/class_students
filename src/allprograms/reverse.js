function reverseStringKeepSymbols(str) {
    const letters = str.split('').filter(c => /[a-zA-Z]/.test(c));
    letters.reverse();

    let result = '';
    let letterIndex = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            result += letters[letterIndex++];
        } else {
            result += char;
        }
    }

    return result;
}

module.exports = reverseStringKeepSymbols;
