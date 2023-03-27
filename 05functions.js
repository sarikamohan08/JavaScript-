function sayHello(name) {
    console.log("Hello there, sarika");
    console.log(`Hello there, ${name}. How are you?`);
    return "hi";
  }
  
  // sayHello("hitesh");
  // sayHello("Sammy");
  
  function namstey() {
    return "Hello in India";
  }
  
  var greetings = namstey();
  var hello=sayHello("kavya");

  console.log(greetings);
  console.log(namstey());
  console.log(hello);
  

  /*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
    switch (role) {
      case "admin":
        return `${name} is admin with all access`;
        break; // this is not necessary
      case "subadmin":
        return `${name} is sub-admin with access to create and delete courses`;
        break;
      case "testprep":
        return `${name} is a test prep with access to create and delete tests`;
        break;
      case "user":
        return `${name} is a user to consume content`;
        break;
  
      default:
        return `${name} is a trial user`;
        break;
    }
  };
  
  console.log(getUserRole("sarika", "testprep"));
  
  var getRole = getUserRole("sammy", "user");
  
  console.log(getRole);
  