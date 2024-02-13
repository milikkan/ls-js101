function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      // break;
      return false;
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('')); // false
console.log(isDotSeparatedIpAddress('11.22.33')); // false
console.log(isDotSeparatedIpAddress('11.22.33.44.11')); // false
console.log(isDotSeparatedIpAddress('255.256.1.1')); // false
console.log(isDotSeparatedIpAddress('-1.0.0.1')); // false
console.log(isDotSeparatedIpAddress('0.0.0.0')); // true
console.log(isDotSeparatedIpAddress('255.255.255.255')); // true
console.log(isDotSeparatedIpAddress('127.0.0.1')); // true