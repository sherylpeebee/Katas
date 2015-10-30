function matchingBrackets(arr){
  var leftBrackets = ["[", "{", "("];
  var rightBrackets = ["]", "}", ")"];

  var left, right, toCheck=[];

  var split = arr.map(function(str){
    return str.split("");
  });
  var test = split.map(function(bracketArr, index){
    if(bracketArr.length % 2 !== 0){
      return "fail";
    }
    else if (bracketArr.length % 2 === 0){
      if(rightBrackets.indexOf(bracketArr[0]) !== -1){
        return "fail";
      }
      else {
        left = {};
        right = {};
        bracketArr.forEach(function(bracket, idx){
          if(leftBrackets.indexOf(bracket) > -1){
            left[idx] = bracket;
          }
          else {
            right[idx] = bracket;
          }
          toCheck.push({index: index, left: left, right: right});
        });
      }
    }
  });
  toCheck.forEach(function(obj){
    var rightKeys = Object.keys(obj.right);
    var toMatch = [];
    var matches = [];
    Object.keys(obj.left).forEach(function(key, idx, arr){
      if(key != arr[idx+1]-1 && idx !== arr.length-1){
        if(obj.left[key] === leftBrackets[0] && obj.right[rightKeys[idx]] === rightBrackets[0] || obj.left[key] === leftBrackets[1] && obj.right[rightKeys[idx]] === rightBrackets[1] || obj.left[key] === leftBrackets[2] && obj.right[rightKeys[idx]] === rightBrackets[2]){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        toMatch.push(obj.left[key]);
        matches.push(obj.right[rightKeys[idx]]);
      }
    });
    matches.reverse();
    var results = [];
    for(var i = 0; i< toMatch.length; i++){
      if(toMatch[i] === leftBrackets[0] && matches[i] === rightBrackets[0] || toMatch[i] === leftBrackets[1] && matches[i] === rightBrackets[1] || toMatch[i] === leftBrackets[2] && matches[i] === rightBrackets[2]){
        results.push("pass");
      }
      else{
        results.push("fail");
      }
    }
    if(results.indexOf("fail") < 0){
      test[obj.index] = "pass";
    }
    else{
      test[obj.index] = "fail";
    }
  });
  return test;
}

console.log(matchingBrackets([ "[)", "{}[]()", "{}[()]()" ]));//
console.log(matchingBrackets([ "{}[]([])", "][[{()](", "([){}][]{" ]));
