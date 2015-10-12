// 10/10/15
// Write a function that takes a list of strings an prints them, one per line, in a
// rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"]
// gets printed as:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function printWords(str, borderWidth){
  var splitStr = str.split(" ");
  var container = [];
  splitStr.forEach(function(word, idx, arr){
    for(var i = 0; i <= borderWidth+1; i ++){
      if(i === 0 || i === borderWidth){
        container.push("*");
      }
      else if( i === 1 || i > word.length+2 && i !== borderWidth+1){
        container.push(" ");
      }
      else if(i === borderWidth+1){
        container.push("\n");
      }
      else {
        container.push(word[i - 2]);
      }
    }
  });
  for(var i = 0; i < borderWidth; i++){
    container.push("*");
  }
  return container.join("");
}

function framedString(str){
  var splitStr = str.split(" ");
  var sortedByLength = splitStr.sort(function(a, b){
    return a.length - b.length;
  });
  var longest = sortedByLength.pop();
  var borderWidth = longest.length + 4;
  var frame = [];
  for(var i = 0; i <= borderWidth; i++){
    if(i === borderWidth){
      frame.push("\n");
    }
    else{
      frame.push("*");
    }
  }
  console.log(frame.join("")+ printWords(str, borderWidth));
}

framedString("Hello world in a frame");
