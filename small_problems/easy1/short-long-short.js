function shortLongShort(str1, str2) {
  let short = (str1.length < str2.length) ? str1 : str2;
  let long = (short === str1) ? str2 : str1;
  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"