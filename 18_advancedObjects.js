var User = {
    name: "",
    getUserName: function () {
      console.log(`User name is : ${this.name}`);
    },
  };
  
  var sarika = Object.create(User);
  console.log(sarika);
  sarika.name = "sarika mohan";
  sarika.getUserName();
  
  var sam = Object.create(User, {
    name: { value: "sammy" },
    courseCount: { value: 3 },
  });
  
  sam.getUserName();