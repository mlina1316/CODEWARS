function find_average(array) {
  const sum = array.reduce((a, b) => (a + b));
  return sum/array.length;
}