function changePossibilities(amount, coinTypes) {
  //sort the coinTypes in order of increasing value
  coinTypes.sort();
  let numOfCombinations = 0;

  //test all possible combinations of coins from the highest down
  function recursion(sum, idx) {
    for (let i=idx; i>=0; i--) {
      if (amount === (sum + coinTypes[i])) numOfCombinations++;
      else if (amount > (sum + coinTypes[i])) recursion(sum + coinTypes[i], i);
    }
  }

  recursion(0, coinTypes.length -1);
  return numOfCombinations;
}
