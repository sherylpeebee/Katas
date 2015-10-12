// 10/09/15
//prototype practice

Array.prototype.duplicate = function(){
  var newArr = this.slice();
  for(var i = 0; i < this.length; i ++){
    newArr.push(this[i]);
  }
  return newArr;
};

console.log([1, 2, 3, 4].duplicate());
