const strings = ["a", "b", "c", "d"];
//4*4 = 16bytes

//push - add at last
strings.push("e"); //O(1)

//pop - remove at last
strings.pop(); //O(1)

//unshift - add at first
strings.unshift("x"); //O(n)

//splice - add at the middle
strings.splice(2, 0, "alien"); //O(n/2) -> O(n)

console.log(strings);
