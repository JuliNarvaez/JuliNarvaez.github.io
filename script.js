const btn = document.querySelector(".toggle");
const darkTheme = 'dark-theme'; 
let isDarkModeActived = JSON.parse(localStorage.getItem(darkTheme));

function setDarkMode(isChecked){
  document.body.classList.toggle(darkTheme, isChecked);
  btn.checked = isChecked;
}

setDarkMode(isDarkModeActived);

btn.addEventListener("click", function () {
  localStorage.setItem(darkTheme, !isDarkModeActived);
  setDarkMode(!isDarkModeActived);
  isDarkModeActived = !isDarkModeActived;
});
