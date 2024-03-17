const api = "412d94e5f27d88e8acab0a2e5ab8cc45";
const loadingContainer = document.querySelector(".grant-location-container");
const userInfoContainer = document.querySelector(".user-info-container");
const bufferingContainer = document.querySelector(".loading-container");
const userTab = document.querySelector("#yourWeather");
const searchTab = document.querySelector("#searchWeather");
const inputContainer = document.querySelector(".form-container");
const inputBtn = document.querySelector(".btn");

getFromSessionStorage();

let oldTab = userTab;
oldTab.classList.add("current-tab");

userTab.addEventListener("click", () => {
  searchTab.classList.remove("current-tab");
  userTab.classList.add("current-tab");
  inputContainer.classList.remove("active");
  userInfoContainer.classList.remove("active");
  getFromSessionStorage();
});

searchTab.addEventListener("click", () => {
  userTab.classList.remove("current-tab");
  loadingContainer.classList.remove("active");
  searchTab.classList.add("current-tab");
  inputContainer.classList.add("active");
  userInfoContainer.classList.remove("active");
});

inputBtn.addEventListener("click", () => {
  event.preventDefault();
  inputContainer.classList.remove("active");
  loadingContainer.classList.remove("active");
  const cityInput = document.querySelector("[data-searchInput]").value;
  console.log(cityInput);
  fetchSearchWeatherInfo(cityInput);
});

async function fetchSearchWeatherInfo(cityInput) {
  bufferingContainer.classList.add("active");
  userInfoContainer.classList.remove("active");
  loadingContainer.classList.remove("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${api}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    bufferingContainer.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    console.error(error);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation Support not Available.");
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };
  sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
  console.log(userCoordinates);
  fetchUserWeatherInfo(userCoordinates);
}

function getFromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("user-coordinates");
  if (!localCoordinates) {
    loadingContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetUserWeatherInfo(coordinates);
  }
}

const grantAccessBtn = document.querySelector("#grantAccess");
grantAccessBtn.addEventListener("click", getLocation);

async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;
  loadingContainer.classList.remove("active");
  bufferingContainer.classList.add("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
    );
    const data = await response.json();
    bufferingContainer.classList.remove("active");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function renderWeatherInfo(data) {
  const cityName = document.querySelector("[data-cityName]");
  const desc = document.querySelector("[data-weatherDesc]");
  const wind = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const clouds = document.querySelector("[data-cloudiness]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const temp = document.querySelector("[data-temp]");
  cityName.innerText = data?.name;
  desc.innerText = data?.weather?.[0]?.main;
  wind.innerText = data?.wind?.speed + "m/s";
  humidity.innerText = data?.main?.humidity + "%";
  clouds.innerText = data?.clouds?.all + "%";
  weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
  countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
  temp.innerText = data?.main?.temp + "°C";
}
