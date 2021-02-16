// const newArray2 = new Array(10).fill('Z');

// //                0  1  2  3  4
// const newArray = [1, 2, 3, 4, 5];

// const sliceResult = newArray.slice(-2);

// console.log(' newArray = ', newArray);
// console.log(' sliceResult = ', sliceResult);

// newArray.splice(2, 2, 'new elem', 222, 333, 444, 555);
// console.log(' newArray after splice = ', newArray);

// const newArray3 = [1, 2, 3, 4, 5];

// const deletedItem = newArray3.splice(2, 2);
// console.log(newArray3, deletedItem);

// const newArray4 = [1, 2, 3, [22, 33, 44, 55], 5];
// const myString = 'Hello!!!!!';
// // console.log([...newArray4, ...myString]);
// const myNewArray = newArray4.concat(myString);
// console.log(myNewArray.reverse());

// const niceArray = [...newArray4, ...newArray5];
// console.log(niceArray);
// const newArray5 = [1, 2, 3, [22, 33, 44, 55], 5];
// console.log(newArray5[3][0]);

// const myArray6 = ['apple', 'kiwi', 'banana', 'orage', 'grape'];

// for (let i = 0; i < myArray6.length; i++) {
//   console.log(i, '   --->  ', myArray6[i]);
// }

// myArray6.forEach((_, index) =>
//   console.log(myArray6[myArray6.length - index - 1])
// );
// myArray6.reverse().forEach((item) => console.log(item));
console.clear();

const myArray7 = ['apple', 'kiwi', 'banana', 'orage', 'grape'];

// for (let index = 0; index < myArray7.length; index++) {
//   const element = myArray7[index];
//   console.log(' for ->', element);

//   if (element === 'banana') {
//     console.log('I find IT!!!');
//     break;
//   }
// }

// console.log('Show must go on!');

// myArray7.forEach((eeeee, index) => {
//   console.log(' for Each =>', eeeee, index, eeee);
//   if (index === 3) {
//     console.log('I find IT!!!');
//     return;
//   }
// });

// const myArray8 = [
//   'apple',
//   'kiwi',
//   ,
//   [1, 2, 3, 4, 5],
//   'banana',
//   'orage',
//   'grape',
// ];
// myArray8[0] = '';
// delete myArray8[1]; //
// console.log(myArray8);

// myArray8.forEach((item) => {
//   console.log(item, Array.isArray(item));
//   if (Array.isArray(item)) {
//     item.forEach((item2) => console.log(item2));
//   }
// });

// const myArray9 = [1, 2, 3, 4, 5, 6, 7];
// const mapResult = myArray9.map((item) => item * 2 + '!');
// const mapResult = myArray9.map((item) => {
//   return item * 2 + '!';
// });
// const mapResult = myArray9.map(function (item) {
//   return item * 2 + '!';
// });
// console.log(mapResult);

// const myArray10 = [4, 8, 19, 22, 2, 100, 3, 'apple','0.23','A'];

// // myArray10.sort((a, b) => a - b);
// myArray10.sort((a, b) => {
//   console.log('a: ', a, '   b: ', b, ' a - b ==>', a - b);
//   return a - b;
// });

// console.log(myArray10);

// const myArray10 = [1, 2, 3];

// const reduceRes = myArray10.reduce((acc, item) => {
//   console.log(' acc: ', acc, 'item : ', item);
//   return acc + item;
// }, '_!_');

// console.log(reduceRes);

// const myArray11 = [1, 2, 3, 5, 6, 7, 8, 9];
// const filterRes = myArray11.filter((item) => item > 3);
// console.log(filterRes);

const myArray11 = [1, 2, 3, 5, 6, 7, 8, 9];
console.log(myArray11.includes(6));
console.log(myArray11.includes(18));
