/** Solution 1  */

function reverse(str) {
  // check the input (
  // input should not be undefined and
  // should not be length of 1 and
  // should be a string
  if (!str || str.length < 2 || typeof str !== "string") {
    return "that is not a string";
  }

  //create empty array
  // loop around the empty to fill the character in reverse
  //         *push the str element into the new array
  // convert into string and return the result
  let backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

/** Solution 2 with built-in function */
function reverse2(str) {
  return str.split("").reverse().join("");
}

/** Solution 3 */
const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse3("Hi my name is Vineela"));
