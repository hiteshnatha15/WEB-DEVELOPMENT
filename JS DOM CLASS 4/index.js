// // let meraPromise = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     console.log("I am inside promise");
// //   }, 3000);
// //   resolve(12345);
// // });
// // meraPromise.then((value) => {
// //   console.log(value);
// // });
// // meraPromise.catch((error) => {
// //   console.log("Recieved an error");
// // });
// // console.log("pehla");

// // let wada1 = new Promise(function (resolve, reject) {
// //   setTimeout(() => {
// //     console.log("I am inside promise 1");
// //   },2000);
// //   resolve(true);
// // });
// // let output=wada1.then(() => {
// //   let wada2 = new Promise(function (resolve, reject) {
// //     resolve("Wada 2 started");
// //   })
// //   return wada2;
// // })
// // output.then((value) => console.log(value));
// async function abcd() {
//   let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi me mausam acha hai");
//     }, 1000);
//   });

//   let jaipurMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Jaipur me bhaut hi acha hai");
//     }, 2000);
//   });
//   let dM = delhiMausam;
//   let jM = jaipurMausam;

//   return [dM, jM];
// }

// async function utility(){
//     let result=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let content=await result.json();
//     console.log(result);
// }

// async function helper() {
//   let data = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "hitesh",
//       body: "bhaut tagda hai bhai tu toh ",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };
//   let posted = await fetch("https://jsonplaceholder.typicode.com/posts", data);
//   let content = await posted.json();
//   return content;
// }
// helper();

function a() {
  let a = 1;
  console.log(a);
  function b() {
    let a = 2;
    console.log(a);
    function c() {
      let a = 3;
      console.log(a);
    }
  }
}
a();