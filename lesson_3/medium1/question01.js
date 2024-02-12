// For this practice problem, write a program that outputs The Flintstones Rock! 10 times,
// with each line indented 1 space to the right of the line above it.
// The output should start out like this:

/* 
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...
*/

let str = 'The Flintstones Rock!';
for (let count = 1; count <= 10; count += 1) {
  console.log(str.padStart((count - 1) + str.length));
}