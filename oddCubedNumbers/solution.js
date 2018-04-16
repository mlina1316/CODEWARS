function cubeOdd(arr) {

  if (arr.every(x => (typeof x === 'number'))){
    return arr
      .map( x => Math.pow(x, 3))
      .filter( x => x % 2!==0)
      .reduce( (sum, value) => sum + value, 0);
  }
  else{
    return undefined;
  }
}