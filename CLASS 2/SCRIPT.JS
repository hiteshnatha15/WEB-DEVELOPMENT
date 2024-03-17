// console.log("hello");
// console.log("jee");
// const rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log('draw');
//   },
// };

function createRectangle(length, breadth) {
  return (rectangle = {
    length: length,
    breadth: breadth,
    draw() {
      console.log("hi");
    },
  });
}
function Circle(length, breadth) {
  this.length = length;
  this.breadth = breadth;
  this.draw = function () {
    console.log("hello jee");
  };
}
let rectangle1 = createRectangle(5, 4);
let rectangle2 = createRectangle(7, 4);
let circle1 = new Circle(9, 6);

let rhombus = new Function(
  "length",
  "breadth",
  `this.length=length;
this.breadth=breadth;
this.draw=function(){
  console.log('hello');
};`
);

let rhombus1 = new rhombus(5, 6);

let a = { value: 10 };
let b = a;
a.value++;
console.log(a.value);
console.log(b.value);

function ref(a) {
  a.value++;
}
console.log(a.value);

let triangle = {
  side: 50,
  area: 500
};
for (let key in triangle) {
  console.log(key, triangle[key]);
}
//of loop for iterables like arrays,etc.
for (let key of Object.entries(triangle)) {
  console.log(key);
}
if ('color' in triangle) {
  console.log("present");
} else {
  console.log("absent");
}
let triangleCloning={};
for(let key in triangle){
  triangleCloning[key]=triangle[key];
};
let triangle2=Object.assign({},triangle);
let traiangle3={...triangle};

