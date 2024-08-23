// reverse a string - return a string in reverse

function reverseString(str) {
    // first way
    /*return str.split('').reverse().join(''); */

    //second way
    /*let revString = '';
    for(let i = str.length - 1 ; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString; */

    //third way
    /*let revString = '';
    for(let i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString;
    }
    return revString; */

    //fourth way
    /*let revString = '';
    for(let char of str) {
        revString = char + revString;
    }
    return revString; */

    //fifth way
    /* let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString; */

    //sixth way
    return str.split('').reduce((revString, char) => char + revString, '');
}