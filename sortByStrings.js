function sortByStrings(s, t) {
  let output = [];

  t.forEach(function(char) {
    s.forEach(function(char2) {
      if (char2 === char) {
        output.push(char2);
      }
    })
  })

  return output.join('');
}
