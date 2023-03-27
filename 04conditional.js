var temperature;


temperature = 49;

// var result = temperature < 20;
// console.log(result);

if (temperature < 20) {
  console.log("it's very cold outside");
}

if (temperature < 30) {
  console.log("It's moderate outside");
} else {
  console.log("It's really HOT outside");
}

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// if (isLoggedIn) {
//   console.log("Logged IN Success");
//   if (isEmailVerified) {
//     console.log("Email is verified");
//     if (cardInfo) {
//       console.log("You can make a purchase");
//     }
//   }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("Allow user to make a purchase");
} else {
  console.log("You are NOT allowed to do that");
}


var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
  console.log("Login Success");
}


// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }

authenticated ? console.log("SignOut Button") : console.log("LOGIN");


// Create an application with following roles:
// admin  - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "subadmin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");

    break;
}


//TODO: falsy
// undefined
// null
// 0
// ''
// NaN

var user = "2";

if (2 === user) {
  console.log("Condition is true");
}