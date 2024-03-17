let value = document.getElementById("value");
console.log(value.innerText);

document.getElementById("plus").addEventListener("click", function () {
  value.innerText = parseInt(value.innerText) + 1;
});
document.getElementById("minus").addEventListener("click", function () {
  value.innerText = parseInt(value.innerText) - 1;
});
