const Sarika = {
    firstName: "sarika",
    lastName: "mohanraj",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
      console.log(`
          First name is ${this.firstName}
          Last name is ${this.lastName}
          His role is ${this.role}
          and she is studying ${this.courseCount} courses
          `);
    },
  };
  
  const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
  };
  
  sarika.getInfo();
  dj.getInfo();
  
  var djInfo = sarika.getInfo.bind(dj);
  djInfo();
  
  sarika.getInfo.call(dj);
  // bind gives refernce  back n manual call that method  