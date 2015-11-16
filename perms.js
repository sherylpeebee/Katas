var permutations = {
  count : 0,
  results : [],
  print : function(str){
    this.count ++;
    var strToArr = str.split('');
    var subArr = strToArr.slice(strToArr.length - 3, strToArr.length);
    var fixed = strToArr[0];
    for (var i = 0; i < subArr.length; i ++){
      var first = subArr.shift();
      var last2 = subArr.slice(subArr.length - 2, subArr.length);
      var perm1 = first.concat(last2);
      this.results.push(fixed.concat(perm1).split(',').join(''));
      var perm2 = first.concat(last2.reverse());
      this.results.push(fixed.concat(perm2).split(',').join(''));
      subArr[subArr.length] = first;//circle the order of the subArr with each iteration
    }
    var lastOfStr = strToArr.pop();
    var newSort = lastOfStr.concat(strToArr).split(',').join('');//circle the order of the last strToArr 'str' before each recursive call
    if(this.count === str.length){
      return;
    }
    this.print(newSort);
    return this.results;
  }
};
console.log(permutations.print('abcd'));
