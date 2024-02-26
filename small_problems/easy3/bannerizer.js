// Write a function that will take a short line of text, and write it to the console log within a box.
// - print top line
//   - '+' + (str.length + 2) * '-' + '+'
// - print empty line
//   - '|' + (str.length + 2) * ' ' + '|'
// - print text line
//   - '|' + ' ' + str + ' ' + '|'
// - print empty line
// - print bottom line (same as top)

const printLine = str => console.log(`+${'-'.repeat(str.length + 2)}+`);
const printEmptyLine = str => console.log(`|${' '.repeat(str.length + 2)}|`);

function logInBox(str) {
  printLine(str);
  printEmptyLine(str);
  console.log(`| ${str} |`);
  printEmptyLine(str);
  printLine(str);
}

logInBox('To boldly go where no one has gone before.');

/* 

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

*/

logInBox('');

/*
+--+
|  |
|  |
|  |
+--+
*/
