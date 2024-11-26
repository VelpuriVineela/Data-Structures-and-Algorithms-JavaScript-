let user = {
  age: 54,
  name: "Alex",
  coding: true,
  scream: function () {
    console.log("ahhhhhhhh!");
  },
};

console.log(user.age); //O(1)
user.spell = "abra kadabra"; //O(1)
user.scream(); //O(1)
console.log(user);
