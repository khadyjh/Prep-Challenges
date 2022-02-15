'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {

    var position;
    var length;

    console.log(str.length);
    if (str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;

    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

    var left = str.substr(0, position);
    var right = str.substr(position);

    left = left.replace(/^.+ /g, "");
    right = right.replace(/ .+$/g, "");

    // return str.substring(position, position + length)
    return (left+right).length

    // write your code here
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    if (str1.length === str2.length) {


        for (let i = 0; i < str1.length; i++) {
            if (str2.indexOf(str1[i]) <= -1) return false;
        }
        for (let i = 0; i < str2.length; i++) {
            if (str1.indexOf(str2[i]) <= -1) return false;
        }
        return true;
    }
    else
        return false
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };