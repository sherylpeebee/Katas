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
  var splitStr = str.split(" "),
  container = [],
  newLineBeginning = borderWidth+1;
  splitStr.forEach(function(word){
    for(var i = 0; i <= newLineBeginning; i ++){
      if(i === 0 || i === borderWidth){
        container.push("*");
      }
      else if( i === 1 || i > word.length+2 && i !== newLineBeginning){
        container.push(" ");
      }
      else if(i === newLineBeginning){
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
  var splitStr = str.split(" "),
  framePadding = 4;
  var sortedByLength = splitStr.sort(function(a, b){
    return a.length - b.length;
  });
  var longest = sortedByLength.pop();
  var borderWidth = longest.length + framePadding;
  var frame = [];
  for(var i = 0; i <= borderWidth; i++){
    if(i === borderWidth){
      frame.push("\n");
    }
    else{
      frame.push("*");
    }
  }
  console.log(frame.join(""));
  console.log(frame.join("")+ printWords(str, borderWidth));
}

framedString("Hello world in a frame");
