const remote = require('electron').remote
console.log(window['ThisPageIsRunningInElectron'])
document.getElementById("min-btn").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize();
});
document.getElementById("max-btn").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
});
document.getElementById("close-btn").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.close();
});
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}

function toggleTheme() {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
  html.classList.toggle("dark");
}
//document.getElementById("themeButton").onclick = toggleTheme;
function toggleMenu() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}

let setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

let getCookie = name => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
let showAvatar = () => {
  let url = getCookie('avatar')
  let avatar = document.getElementById('avatar')
  avatar.src = url
}