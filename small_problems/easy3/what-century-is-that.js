// divide year by 100 and ceil the result
// if the result ends in
// 11, 12, 13 -> append 'th'
// 1 -> append 'st'
// 2 -> append 'nd'
// 3 -> append 'rd'
// else -> append 'th'

function century(year) {
  let centuryNum = String(Math.ceil(year / 100));
  let suffix = 'th';

  if (centuryNum.endsWith('1') && !centuryNum.endsWith('11')) {
    suffix = 'st';  
  } else if (centuryNum.endsWith('2') && !centuryNum.endsWith('12')) {
    suffix = 'nd';
  } else if (centuryNum.endsWith('3') && !centuryNum.endsWith('13')) {
    suffix = 'rd';
  }
  return centuryNum + suffix;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"