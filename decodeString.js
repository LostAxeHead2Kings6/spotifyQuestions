function decodeString(s) {
  let output = [];
  const integers = ['1', '2', '3', '4', '5',
                    '6', '7', '8', '9'];

  function multiplyChars(num, chars) {
    let arr = new Array(num);
    for (let i=0; i<arr.length; i++) {
      arr[i] = chars;
    }
    return arr.join('');
  }

  function separateCharsFromInts(str) {
    var output = {
      chars: [],
      integer: []
    }
    const elements = str.split('');
    for (let i=0; i<elements.length; i++) {
      if (!integers.includes(elements[i])) output.chars.push(elements[i]);
      else output.integer.push(elements[i]);
    }
    output.chars = output.chars.join('');
    output.integer = parseInt(output.integer.join(''));

    return output;
  }

  function recursion(s) {
   //remove the very first occurence of a left bracket
    s = s.replace('[', ' ').split(' ');

    //if there were no more brackets to remove return the innermost value;
    if (s.length === 1) return s;
    //distinguish the characters from integers that were left of bracket
    const firstHalf = separateCharsFromInts(s[0]);
    //the 'remainder' is the next bracket layer to be recursed
    const remainder = s[1].slice(0, -1);

    if (!firstHalf.chars) {
      return multiplyChars(firstHalf.integer, recursion(remainder));
    } else return firstHalf.chars + multiplyChars(firstHalf.integer, recursion(remainder));
  }

  return recursion(s);
}
