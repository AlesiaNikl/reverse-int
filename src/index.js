module.exports = function reverse (n) {
  if (n < 0){
    n = n * (-1);
  }  
  let str = n.toString();
  let arr = str.split('');
  str = arr.reverse().join('');
  let result = Number(str);
  return result; 
}

