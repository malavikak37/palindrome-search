function reverse(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
        o.push(s.charAt(len - i));
    return o.join('');
}

function isPalindrome(word, words) {
    return word === reverse(word) && !words.includes(word)
}

function printPalindromesInString(s) {
    s = s.replace(/ /g, '')
    let subStrings = [];
    const length = s.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            let subString = s.substring(j, j + i + 1);
            if (subString.length >= 2 && isPalindrome(subString, subStrings)) {
                subStrings.push(subString);
            }
        }
    }
    return subStrings.reverse();
}
