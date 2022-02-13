'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {

    let last=str.lastIndexOf(" ");
    return str.slice(last+1)

    // write your code here
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let arr=str.split(" ")
        let lastWord = arr.slice(-1);
        return lastWord.join(" ");
    // write your code here
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {

    // let arr = [];
    // let x = str.split(" ");
    // x.forEach(element => {
    //     if (element == 'am') {
    //         // arr.push(element.replace('am', 'are'))
    //         element=element.replace('am', 'are')
    //     }
    //     else if (element == 'I') {
    //         // arr.push(element.replace('I', 'we'))
    //         element=element.replace('I', 'We')
    //     }
    //     else if (element == 'was') {
    //         // arr.push(element.replace('was', 'were'))
    //         element=element.replace('was', 'were')
    //     }

    //     arr.push(element) 

    // });

     
    // // console.log(arr)
    // return arr.join(" ")

    let x = str.split(" ");
    x.forEach((element,indx) => {
        if (element == 'am') {
          
            x.splice(indx,1,'are')
            
        }
        else if (element == 'I') {
         
            x.splice(indx,1,'We')
           
        }
        else if (element == 'was') {
           
            x.splice(indx,1,'were')
        }


       

    });


     
    
    return x.join(" ")

    // write your code here
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    arr.splice(5,0,',')
    return (arr.join(" "));
    // write your code here
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };