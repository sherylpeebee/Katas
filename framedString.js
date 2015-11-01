function framedString(str){
  var splitStr = str.split(" "),
  framePadding = 4;
  var sortedByLength = splitStr.sort(function(a, b){
    return a.length - b.length;
  });
  var longest = sortedByLength.pop();
  var borderWidth = longest.length + framePadding;
  var frame = Array(borderWidth + 1).join("*") + "\n";

  var splitStr2 = str.split(" ");
  var container = [],
  newLineBeginning = borderWidth+1;
  splitStr2.forEach(function(word){
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
  var contents = container.join("");
  console.log(frame + contents + frame);
}

framedString("Hello world in a frame");
