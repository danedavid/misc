/**
 *
 * Program to print permutations of a string using Javascript
 *
**/
const string = process.argv[2];

// Add swap() method to String.prototype that returns a new string with 2 characters swapped
String.prototype.swap = function (i, j) {
  if ( i == j ) {
    return this.slice();
  }
  return this.slice(0, i) + this[j] + this.slice(i + 1, j) + this[i] + this.slice(j+1);
};

let count = 0;

// permute() function, which recursively calls itself
const permute = (str, fixedPart) => {
  if ( str.length === 1 ) {
    // end of branch; print and backtrack
    console.log(fixedPart + str);
    count++;
    return;
  }
  // swap each char with first character, and then permute()
  for ( let i = 0; i < str.length; i++ ) {
    const newString = str.swap(0, i);
    permute(newString.slice(1), fixedPart + newString[0]);
  }
};

permute(string, '');
console.log('Count -> ', count);
