// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// const uniq = (array) => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

// const { size } = new Set([1, 2, 3, 3]);
// console.log(size);

// const set2 = new Set();
// console.log(set2);

// set2.add(1);
// console.log(set2);

// set2.add(1).add(2);
// console.log(set2);

// const set = new Set([1, 2, 3]);
// console.log(set.has(2));
// console.log(set.has(4));

// set.delete(2)
// console.log(set);

// set.clear();
// console.log(set);

// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for (let o of odds) {
//   sum += o;
// }
// console.log(sum);

// let product = 1;
// odds.forEach((o) => (product *= o));
// console.log(product);

// const set = new Set([1, 2, 3]);
// set.forEach((v, v2, set) => console.log(v, v2, set));

// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach((userID) => {
//   console.log(`ID: ${userID}`);
// });

// const tags = ["JavaScript", "CSS", "HTML", "HTML"];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach((tag) => {
//   console.log(`tag: ${tag}`);
// });

// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 3, 2]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter((x) => set2.has(x)));
// console.log(intersection);
// let difference = new Set([...set1].filter((x) => !set2.has(x)));
// console.log(difference);

// const iam = new Set("i am a student");
// console.log(iam.size);

// const map1 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map1);

// const map3 = new Map([[1, 2]]);
// console.log(map3);

// const map = new Map([
//   ["key1", "value1"],
//   ["key1", "value2"],
// ]);
// console.log(map);
// console.log(map.size)

// const map = new Map();
// console.log(map);
// map.set("key1", "value1");
// console.log(map);
// map.set("key1", "value1").set("key2", "value2");
// console.log(map);

// const map = new Map();
// const lee = { name: "lee" };
// const kim = { name: "kim" };
// const park = { name: "park" };
// const choi = { name: "choi" };
// map
//   .set(lee, "developer")
//   .set(kim, "designer")
//   .set(park, "designer")
//   .set(choi, "designer");
// console.log(map);
// console.log(map.delete(lee));
// console.log(map);
// console.log(map.has(choi));
// map.clear();
// console.log(map);

// let map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
// map.forEach((value, key) => console.log(value, key));

// const map = new Map([
//   ["국어", 85],
//   ["영어", 90],
//   ["수학", 95],
// ]);
// console.log(map);
// let sum = 0;
// map.forEach((value) => (sum += value));
// console.log(sum);

// let average = sum / map.size;
// console.log(average);

// const map = new Map();
// map.set("유럽 책방 문화 탐구", "title : ");
// map.set("한미화", "author : ");
// map.set(23000, "price : ");
// map.forEach((key, value) => {
//   console.log(key, value);
// });

// const numbers = new Set([3, 7, 12, 3, 12, 3]);
// console.log(numbers);
