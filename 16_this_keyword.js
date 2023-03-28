console.log(this);

var user = {
  firstName: "sarika",
  courseCount: 4,
  getCourseCount: function () {// function called through object not regular func call
    console.log("LINE 7", this);
    function sayHello() {// function call is regular
      console.log("Hello");
      console.log("LINE 10", this);
    }
    sayHello();
  },
};

user.getCourseCount();
