/**
 * countTheHoles()
 *
 * Write a `countTheHoles` function that takes an intenteger and counts the
 * number of holes for each number.
 *
 * For example: the number 8042 would have 4 holes:
 *  - 2 holes in the 8
 *  - 1 hole in the 0, 4, 6, 9
 *
 *
**/


//++ YOUR CODE HERE






function countTheHoles(num) {
  // console.log(num);
  var numHoles = 0
  var  stringsNumber = num.toString()

  for (var i = 0; i <  stringsNumber.length; i++) {
    var str = stringsNumber[i]
    // console.log(str);

  if (str === '0' || str ==='6' ||  str === '9' ||  str ==='4') {
    numHoles = numHoles + 1
  }else if (str === '8') {
     numHoles = numHoles + 2
  }

}
 console.log(numHoles)
 return numHoles
}
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-05');
  console.log('%cFunction: countTheHoles', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// Function should return the total number of 'holes'
//   from the number passed as an argument
/* ------------------------------------------------------ */
console.log('TEST-1');

// 1 hole in '0', 1 hole in '9'
console.assert(  countTheHoles(301923) === 2  )

// 2 holes in each '8', 1 hole in '0', 1 hole in 6
console.assert(  countTheHoles(880216) === 6  )

// 1 hole in each '4', 1 hole in '0'
console.assert(  countTheHoles(40442) === 4 )

// 2 holes in each '8', 1 hole in '0'
console.assert(  countTheHoles(808) === 5  )
