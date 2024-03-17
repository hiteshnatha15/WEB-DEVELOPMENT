const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hi, I am  this.nameand I am {this.age} years old`);
  },
};
const greet=person.greet;
greet();
p