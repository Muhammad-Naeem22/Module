import slogin from "./Student.js";
import tlogin from "./Teacher.js";
import flogin from "./faculty.js";

let teacher = new tlogin();
console.log(teacher.Data);

let student = new slogin();
console.log(student.Data);

let faculty = new flogin();
console.log(faculty.Data);
