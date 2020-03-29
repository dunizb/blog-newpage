window.onload = function () {
  var stylesheet = document.getElementById("stylesheet"),
    light = document.getElementById("toggle-light"),
    dark = document.getElementById("toggle-dark");
  light.addEventListener("click", function () {
    setTheme("light");
  });
  dark.addEventListener("click", function () {
    setTheme("dark");
  });

  function setTheme(theme) {
    console.log(theme);
    stylesheet.href = "../styles/" + theme + ".css";
  }
};
