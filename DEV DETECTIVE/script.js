const themeBtn = document.querySelector("#btn-mode");
const modeText = document.querySelector("#mode-text");
const modeIcon = document.querySelector("#mode-icon");

themeBtn.addEventListener("click", () => {
  modeText.textContent = "LIGHT";
  modeIcon.src = "./assets/images/sun-icon.svg";
});
