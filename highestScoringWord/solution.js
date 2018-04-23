function high(x) {
  let words = x.split(/[^a-z]+/);
  let scores = words.map(word => [...word].map(a => a.charCodeAt(0) - 96).reduce((a, b) => a + b, 0));
  let scores1 = words[scores.indexOf(Math.max(...scores))];
  return scores1;   
}