// // single element selector
// let element = document.getElementById("name");
// element = element.className;
// element = element.childNodes;
// console.log(element);

// let change = document.getElementById("login_form");
// change.innerText = "Abhishek form";
// change.style.color = "red";
// change.innerHTML = "<i>abhishek pravin kuntare</i>";
// console.log(change);

// select element with the help of css
let css_ele = document.querySelector("#login");
css_ele = document.querySelector(".btn");
css_ele.style.color = "blue";
console.log(css_ele);

// multiple selector with css
let multiple_sele = document.getElementsByClassName("one");
console.log(multiple_sele);
console.log(multiple_sele[0]);
console.log(multiple_sele[3]);
multiple_sele = document.getElementsByTagName("div");
console.log(multiple_sele);
