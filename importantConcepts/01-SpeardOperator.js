arr = [3, 4, 2, 7];

function avg(a, b, c) {
  return a + b + c / 3;
}

// const a = avg(...arr);
// let a = [5, 6, 7, ...arr];
// let a = [...arr];
let b = ["e", " t", "t"];
let c = [5, 6, 7];
let a = [...b, ...c];

let obj1 = {
  user: "Abhishek",
  role: "Developer",
  FavLang: "React",
};
// obj1.user = obj1.user;
// obj1.role = obj1.role;
// obj1.FavLang = "Python";
// console.log(obj1);

let obj2 = { ...obj1, FavLang: "Javascript" };
console.log(obj2);
