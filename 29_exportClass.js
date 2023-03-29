// import User from "./06classjs";

const User = require("./28_objects.js");

const hitesh = new User("sarika", "sarikamohan08@gmail.com");

//console.log(Sarika.getInfo());
hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(sarika.getCourseList());

let courses = sarika.getCourseList();

courses.forEach((c) => console.log(c));