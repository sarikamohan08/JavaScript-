var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
  };
  
  User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
  };
  
  var sarika = new User("sarika", 2);
  
  console.log(sarika);
  sarika.getFirstname();
  sarika.getCourseCount();
  
  if (sarika.hasOwnProperty("firstName")) {
    sarika.getFirstname();
  }
  
  //console.log(hitesh);
  
  var sam = new User("Sam", 1);
  sam.getCourseCount();
  sam.getFirstname();
  //console.log(sam);
  