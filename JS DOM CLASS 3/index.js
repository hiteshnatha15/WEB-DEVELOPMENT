//adding 100 para
const t1 = performance.now();
for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is a para" + i;
  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took " + (t2 - t1) + " ms");

//optimising a bit
let t3 = performance.now();
let myDiv = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para" + i;
  myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
let t4 = performance.now();
console.log("This took" + (t4 - t3) + " ms.");

//optimising a bit
let t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para " + i;
  fragment.appendChild(element);
}
document.body.appendChild(fragment);
let t6 = performance.now();
console.log("time taken=" + (t6 - t5));

//clearing the timeout
var t8=performance.now();
let t7 = performance.now();
setTimeout(function () {
  console.log("hello");
  t8 = performance.now();
}, 10000);
console.log("time taken=" + (t8 - t7));
