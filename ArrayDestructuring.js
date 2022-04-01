const student = ["rutuja", "rutwij", "vaishu", "kundan"]

//simple way to access Array elements
// var std1 = student[0];
// var std2 = student[1];
// var std3 = student[2];
// var std4 = student[3];
// console.log(std1);
// console.log(std2);
// console.log(std3);
// console.log(std4);

//The Syntax with array destructuring (es6)
let [std1, std2, std3, std4] = student;
console.log(std1);
console.log(std2);
console.log(std3);
console.log(std4);

//Ignoring Some Values
// let [std1, , ,std4] = student;
// console.log(std1);
// console.log(std4);