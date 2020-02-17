// // // // // // let obj = {
// // // // // //   name: "nizar",
// // // // // //   age: 40
// // // // // // };
// // // // // // for (let prop in obj) console.log(prop, obj[prop]);
// // // // // // console.log("name" in obj);
// // // // // // console.log("city" in obj);

// // // // // // let obj1 = {
// // // // // //     name: "nizar",
// // // // // //     age: 40
// // // // // //   };
// // // // // //   for (let prop in obj) console.log(prop, obj1[prop]);
// // // // // //   console.log("name" in obj1);
// // // // // //   console.log("city" in obj1);
// // // // // //   co
// // // // // // const ul = document.querySelector(".people");
// // // // // // const people = ["mario", "nour", "leen", "kahl"];
// // // // // // let html = ``;
// // // // // // people.forEach(function(person) {
// // // // // //   html += `<li style="color: purple>${person}</li>`;
// // // // // // });
// // // // // // console.log(html);
// // // // // let obj = {
// // // // //   name: "nizar",
// // // // //   age: 40
// // // // // };
// // // // // for (let prop in obj) console.log(prop + " " + obj[prop]);
// // // // // console.log("city" in obj);

// // // // //For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
// // // // //Expected output: James needs a minimum of --% to get an 80% average.
// // // // // let degree = 78 * 8;
// // // // // let degree2 = 80 * 9;
// // // // // let result = degree2 - degree;
// // // // // console.log(result);
// // // // // let hours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
// // // // // let days = 10;
// // // // // let average = hours / 10;
// // // // // console.log(average);
// // // // //3. Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”/
// // // // // let age = 16;
// // // // // if (age < 16) {
// // // // //   console.log("not allowed to dring");
// // // // // } else {
// // // // //   console.log("serve butter beer");
// // // // // }
// // // // let age = 12;
// // // // age < 16
// // // //   ? console.log("not allowed to dring")
// // // //   : console.log("serve butter dring");
// // // // let name = "leen";
// // // // // let firstCharecter = name[0];

// // // // console.log(` ${firstCharecter}${name}${firstCharecter}`);
// // // let string = "the quick brown fox";
// // // let firstCharecter = string[0].toLocaleUpperCase();
// // // let restOfString = string.slice(1);
// // // console.log(`${firstCharecter}${restOfString}${string}`);
// // // function Exponential(a, b) {
// // //   if (typeof a == "number" && typeof b == "number") {
// // //     let result = 1;
// // //     for (let i = 0; i < b; i++) {
// // //       result *= a;
// // //     }

// // //     return result;
// // //   }
// // // }
// // // console.log(Exponential(3, 5));
// // let num = 10;
// // let num1 = 55;
// // if((num>=50) && (num<=99)||(num1>=50)&&(num1<=99){

// // }
// // let string = "school";
// // if (string.substring(0, 2) == "py") {
// //   console.log(string);
// // } else {
// //   console.log(`py${string}`);
// // }
// // let num = 2;
// // let num1 = 2;
// // if (num == num1) {
// //   console.log((num + num1) * 3);
// // } else {
// //   console.log(num + num1);
// // }
// // let num = 9;
// // if (num % 3 == 0 && num % 5 == 0) {
// //   console.log("fizzbuzz");
// // } else if (num % 3 == 0) {
// //   console.log("fizz");
// // } else if (num % 5 == 0) {
// //   console.log("buzz");
// // } else {
// //   console.log("not found this number");
// // }
// // let num = 0;
// // while (num < 15) {
// //   console.log(num);
// //   num++;
// // }
// function f() {
//   let num = 1;
//   let sum = 0;
//   while (num <= 20) {
//     sum += num;
//     num++;
//   }
//   console.log(sum);
// }
// f();
// let num = 12;
// do {
//   num++;
//   console.log(num);
// } while (num < 20);

// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) console.log(`${i} * ${j} = ` + i * j);
// }
// for (let i = 0; i <= 10; i++) {
//   console.log(i * 100);
// }
// for (let i = 1; i <= 128; ) {
//   console.log(i);
//   i += i;
// }
// for (let i = 0; i <= 10; ) {
//   console.log(i);
//   i += 2;
// }
// for (let i = 0; i <= 15; ) {
//   console.log(i);
//   i += 3;
// }
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 3; j++) console.log(i);
// }
for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= 4; j++) console.log(j);
}
