// document.getElementById("harry").addEventListener("click", function (e) {
//   console.log("Clicked olne");
//   // location.href = "//mineresume.vercel.app/";
//   console.log(e);
//   let element;
//   element = e.target;
//   element = e.target.className;
//   element = e.target.id;
//   element = e.target.classList;
//   element = e.offsetX;
//   element = e.offsetY;
//   console.log(element);
// });

// document.getElementById("harry").addEventListener("mouseover", function (e) {
//   console.log(e);
//   console.log("Abhishke is here");
// });

// let btn = document.getElementById("btn").addEventListener("click", fun1);
// btn.addEventListener("click", fun2);
// function fun1(e) {
//   console.log(e);
//   console.log("Submtting the Form   ");
//   e.preventDefault(); // is use to do not page reload while we submit
// }

document.getElementById("body").addEventListener("mousemove", function (e) {
  console.log(e.offsetX, e.offsetY);
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},156)`;
});
