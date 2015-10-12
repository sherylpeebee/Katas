//10/09/15 (coderbyte)
// Have the function LetterChanges(str) take the str parameter being passed and
// modify it using the following algorithm. Replace every letter in the string
// with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally
// return this modified string.

function letterChanges(str){
  var arr = [];
  for(var i = 0; i < str.length; i++){
    arr.push(str[i].charCodeAt(0));
  }
  var newSentence = arr.map(function(charCode){
    if(charCode === 32){
      return " ";
    }
    else{
      return String.fromCharCode(charCode + 1);
    }
  });
  var result = newSentence.map(function(newLetter){
    if(newLetter.match(/[aeiou]/)){
      return newLetter.toUpperCase();
    }
    else {
      return newLetter;
    }
  });
  return result.join("");
}
console.log(letterChanges("Argument goes here"));
