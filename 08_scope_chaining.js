var name = "sarika";

console.log("Line number 3", name);

function sayName() {
  var name = "Ms. S";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Ms. Sarika mohanraj";
    console.log("Line number 12", name);
  }
}

sayName();
