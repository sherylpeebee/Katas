//10/10/15

// Given an array with numbers, write a program that efficiently answers queries of
// the form: “Which is the nearest larger value for the number at position i?”, where
// distance is the difference in array indices. For example in the array [1,4,3,2,5,7],
// the nearest larger value for 4 is 5. After linear time preprocessing you should
// be able to answer queries in constant time.

function nearestLarger(idx, arr){
  var testNum = arr[idx];
  var results = [];
  arr.forEach(function(num, i, a){
    if(num > testNum){
      var diff = Math.abs(idx - i);
      results.push({num: num, diff: diff});
    }
  });
  var sorted = results.sort(function(a, b){
    return a.diff - b.diff;
  });
  return sorted[0].num;
}

console.log(nearestLarger(1, [1,4,3,2,5,7]));
