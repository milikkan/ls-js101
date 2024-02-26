/* 
Write a function that takes a positive integer, n, as an argument and
logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end
at the lower-left of the triangle, and the other end at the upper-right.
*/

// loop from 1 to n (loop variable is count)
// print (n - count) space, count *

// test 5
// count = 5
//     *
//    **
//   ***
//  ****
// *****

function triangle(n) {
  let count = 1;
  while (count <= n) {
    console.log(`${' '.repeat(n - count)}${'*'.repeat(count)}`);
    count += 1;
  }
}

triangle(5);

/*     
    *
   **
  ***
 ****
*****

 */

triangle(9);
/* 
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
********* 

*/