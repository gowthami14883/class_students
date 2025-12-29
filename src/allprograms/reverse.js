function reverseStringKeepLettersBySegment(str) {
    const result = [];
    let segment = '';
    
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            segment += char; 
        } else {
            
            result.push(segment.split('').reverse().join(''));
            result.push(char); 
            segment = ''; 
        }
    }
    if (segment) {
        result.push(segment.split('').reverse().join(''));
    }

    return result.join('');
}

module.exports = reverseStringKeepLettersBySegment;
