let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620];
// let carSales2 = new Array(
//   300,
//   350,
//   400,
//   450,
//   500,
//   600,
//   650,
//   620,
//   580,
//   620,
//   580,
//   620
// );
// console.log(carSales2);

// let copy = Array.from(carSales);
// console.log(copy);

// let concat = [0, carSales, 300, 500, 600];
// console.log(concat);

// let numbers = [..."0123456789ABCDEF"]; // ...을 찍고하면 ,를 찍지않고 바로 배열로 만듬
// console.log(numbers);

// let may = carSales[4];
// console.log(may);

// let june = carSales["5"];
// console.log(june);

// carSales[12] = -50;
// console.log(carSales[12]);

// let a = [..."12345"];
// console.log(a.length);
// a.length = 0; // 배열요소 삭제
// console.log(a);

// let jan, fab, mar, rest;
//jan 은 carSales[0] fab 은 carSales[1] mar 은 carSales[2] ...rest는 carSales[나머지 배열값 전부]
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);
// console.log(rest);

// let sum = 0;
// for (let sale of carSales) sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);
// console.log(average);
// console.log(roundedAverage);

// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//   if (index % 2 === 0) sum += sale;
// }
// let average = sum / (carSales.length / 2);
// console.log(average);

// let list = [4, 5, 6];
// // for in 은 배열 순서를 내보낸다.
// for (let i in list) {
//   console.log(i); //0, 1, 2
// }
// // for of 는 배열 값을 내보낸다.
// for (let i of list) {
//   console.log(i); //4, 5, 6
// }

// const car = {
//   maker: "bmw",
//   color: "red",
//   year: "2012",
// };

// for (let prop in car) {
//   console.log(prop);
// }

// let sum = 0;
// carSales.forEach((sale) => {
//   sum += sale;
// });
// let average = sum / carSales.length;
// console.log(average);

// carSales.forEach((sale, index, array) => {
//   array[index] = sale + 50;
// });
// console.log(carSales);

// let newCarSales = carSales.map((sale) => sale + 50);
// console.log(newCarSales);

// let highSales = newCarSales.filter((sale) => sale > 500);
// console.log(highSales);

// let evenSales = newCarSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);

// let firstSaleSix = carSales.find((sale) => sale > 600);
// console.log(firstSaleSix);
// let firstSaleSixIndex = carSales.findIndex((sale) => sale > 600);
// console.log(firstSaleSixIndex);

// let allsaleSix = carSales.every((sale) => sale > 600);
// console.log(allsaleSix);
// let anysaleSix = carSales.some((sale) => sale > 600);
// console.log(anysaleSix);

// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);
// let average = sum / carSales.length;
// console.log(average);

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));
// console.log(highest);

// let flat = [1, [2, 3]].flat();
// console.log(flat);

// let message = ["오늘 날씨가", "좋습니다"];
// let words = message.flatMap((msg) => msg.split(""));
// console.log(words);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// console.log(newArray);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(original);
// console.log(newArray);

// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.push(4);
// console.log(stack);
// stack.unshift(0);
// stack.unshift(-2, -1);
// console.log(stack);
// stack.shift();
// console.log(stack);

// let numbers = [20, 37, -21, 32, -2];
// let filterNumbers = numbers.filter((num) => num === 37 || num === 32);
// document.write(filterNumbers);

// let a = [1, 2, 3, 4, 5];
// a.splice(0, 2);
// a.splice(2);
// a.splice(0, 2, 10, 20);
// console.log(a);
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(b);
// console.log(a);
// console.log(c);

// let a = new Array(5);
// // a.fill(0);
// // console.log(a);
// // a.fill(1, 1);
// // console.log(a);
// a.fill(1, 1, -1);
// console.log(a);

// let a = [0, 1, 2, 4, 2, 1, 0, NaN];
// //맨처음부터 인덱스를 찾다가 4를 만나면 index반환 못찾으면 -1반환
// let b = a.indexOf(4);
// //맨뒤부터 인덱스를 찾다가 2를 만나면 index값 반환 못찾으면 -1반환
// let c = a.lastIndexOf(2);
// //맨처음부터 인덱스를 찾다가 못찾으면 -1반환
// let d = a.indexOf(5);
// console.log(b);
// console.log(c);
// console.log(d);

// let a = [0, true, 2, false, NaN];
// let b = a.includes(true);
// let c = a.includes(2);
// let d = a.includes(NaN);
// let e = a.includes(3);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let a = ["apple", "cheey", "banana"];
// //글자 a-z순으로 정렬
// let b = a.sort();
// console.log(b);

// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// let e = c.sort((a, b) => a - b);
// console.log(e);

// let a = [1, 2, 3];
// let b = a.join();
// console.log(b);
// let c = a.join("");
// console.log(c);

// const scores = [67, 82, 97, 100, 92];
// document.write("for문 이용해서 배열 나타내기");
// document.write("<br>");
// for (let i = 0; i < scores.length; i++) {
//   document.write(scores[i] + ", ");
// }

// document.write("<br>");
// document.write("<br>");

// document.write("for of문 이용해서 배열 나타내기");
// document.write("<br>");
// for (let b of scores) {
//   document.write(b + ", ");
// }

// const tel = ["010", "1234", "5678"];
// let number = tel.join("-");
// document.write(number);

// const colors = ["빨강", "노랑", "파랑", "주황"];
// let red = colors.shift();
// document.write(colors + " / " + red);

// let arr = new Array(2);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(3);
// }
// console.log(arr);

// let arr2 = Array.from(new Array(2), () => new Array(3));
// console.log(arr2);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// const std = [
//   [83, 90, 70, 87],
//   [87, 93, 62, 83],
//   [98, 90, 77, 97],
// ];

// let sum;
// let average;
// text = "";
// for (let i = 0; i < 3; i++) {
//   sum = 0;
//   for (let j = 0; j < 4; j++) {
//     sum += std[i][j];
//   }
//   average = sum / 4;
//   text += i + "번째 학생 합계:" + sum + ", 평균:" + average + "<br>";
// }
// document.write(text);

// let sum = 0;
// mathScores = [90, 85, 70, 86, 97];
// mathScores.forEach((score) => {
//   sum += score;
// });
// let average = sum / mathScores.length;

// document.write("학생 합계 : " + sum + "<br>" + " 학생 평균 : " + average);

// let sum = 0;
// mathScores = [90, 85, 70, 86, 97];
// for (let score of mathScores) {
//   sum += score;
// }
// let average = sum / mathScores.length;
// document.write("학생 합계 : " + sum + "<br>" + " 학생 평균 : " + average);

// a = [12, 0, 2, 5, 4];
// b = [0, 2, 3, 12, 8];
// let same = a.filter((value) => b.includes(value));

// document.write(same);

// numbers2 = [1, 3, 5];
// let numbers = numbers2.map((num) => num * 10);
// document.write(numbers);
