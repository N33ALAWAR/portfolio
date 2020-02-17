// // let x = 4;
// // let y = 6;

// // function logX() {
// //   console.log(x);
// //   let y = 3;
// //   let z = 9;
// //   function f2() {
// //     console.log(z);
// //     console.log(y);
// //   }
// //   f2();
// // }
// // console.log(x);
// // logX();
// // {
// //   let mm = 44;
// //   console.log(mm);
// // }
// // (function test() {
// //   console.log("hi");
// // })();
// // console.log(0 && 9);
// // console.log(1 || 4);
// let calcArea = radius =>   3.14 * radius ** 2;

// console.log(calcArea(6));
// const area = calcArea(100);
// console.log(`area is :`, area);
const bill = function(products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
console.log(bill([150, 20, 40], 0.2));
bee();
console.log(x);
let x = 4;
bee();
function bee() {
  console.log("hi");
}
bee();
