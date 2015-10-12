//10/09/15 (hackerrank)

// 07:05:45PM

function convertTime(time){
  var newTime = time.split(":");
  console.log(newTime);
  if(newTime[2].match(/PM/)){
    var twelveHourTime = parseInt(newTime[0]);
    newTime[0] = 12 + twelveHourTime;
    newTime[2] = newTime[2].replace(/PM/, "");
    console.log(newTime.join(":"));
  }
  else{
    newTime[2] = newTime[2].replace(/AM/, "");
    console.log(newTime.join(":"));
  }
}

convertTime("01:05:45AM");
