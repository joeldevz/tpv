const themeMap = {
  dark: "light",
  light: "dark",
};
const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
const mainClass = document.querySelector("main").classList;
bodyClass.add(theme);
mainClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];
  bodyClass.replace(current, next);
  mainClass.replace(current, next);
  localStorage.setItem("theme", next);
}
document.getElementById("themeButton").onclick = toggleTheme;
function toggleMenu(){
  const toggleMenu = document.querySelector('.menu')
  toggleMenu.classList.toggle('active')
}