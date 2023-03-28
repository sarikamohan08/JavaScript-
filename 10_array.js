var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("tamil nadu", "Delhi", "Mumbai", "bangalore");

//console.log(states[1]);

//console.log(states.length);
states[0] = "Punjab";
//console.log(states);

var user = ["sarika", "sarikamohan08@gmail.com", 3, 34, true];
//console.log(user);

user.pop();
user.pop();
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("newyy"));

console.log(Array.from("sarika"));
