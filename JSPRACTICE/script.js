// function image(url, callback) {
//   const img = new Image();

//   img.addEventListener("load", () => {
//     callback(null,img);
//   });
//   img.addEventListener("error", () => {
//     callback(new Error(`Failed to load image's URL: ${url}`));
//   });
//   img.src = url;
// }

// image(
//   "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
//   (error, img) => {
//     if (error) {
//       console.error(error);
//     } else {
//       document.body.appendChild(img);
//     }
//   }
// );

// function simulateDelay(delay, callback) {
//   setTimeout(callback, delay);
// }
// console.log("start");
// simulateDelay(2000, () => {
//   console.log("executing");
// });
// console.log("end");

// function delay(time) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// }
// console.log("start");
// delay(2000).then(() => {
//   console.log("executing");
// });

// console.log("end");

// function rejectWithDelay(errorMessage, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error(errorMessage));
//     }, delay);
//   });
// }

// // Example usage:
// console.log("start");
// rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
//   console.error(error.message); // Output: Oops! Something went wrong.
// });
// console.log("end");

// function randomArray(length, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const array = Array.from({ length }, () =>
//         Math.floor(Math.random() * 100)
//       );
//       resolve(array);
//     }, delay);
//   });
// }

// randomArray(10, 2500).then((array) => {
//   console.log(array);
// });

// async function fetching(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// fetching("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// async function fetchUrls(urls) {
//   try {
//     const response = await Promise.all(urls.map((url) => fetch(url)));
//     const data = await Promise.all(response.map((res) => res.json()));
//     return data;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.org/users/1",
// ];

// fetchUrls(urls)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// function typeofNum(value) {
//   return new Promise((resolve, reject) => {
//     if (typeof value !== "number") {
//       return Promise.reject(new Error("The value is not a number"));
//     } else {
//       resolve(value);
//     }
//   });
// }

// typeofNum(6)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// function type(value) {
//   if (typeof value !== "number") {
//     throw new Error("this value is not a number");
//   } else {
//     return value;
//   }
// }

// try {
//   console.log(type(5));
// } catch (error) {
//   console.log("Error Recieved:" + error);
// }

const x = 5;
console.assert(x === 10, "x is not 10");
