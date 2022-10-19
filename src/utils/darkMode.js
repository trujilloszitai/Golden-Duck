const DarkMode = () => {
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === "light" || theme === "dark") {
    document.body.classList.add(theme);
  } else {
    document.body.classList.add("light");
  }
};

const switchTheme = (e) => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark", "light");
    e.target.classList.remove("clicked");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.replace("light", "dark");
    e.target.classList.add("clicked");
    localStorage.setItem("theme", "dark");
  }
};

const functionExport = { DarkMode, switchTheme };

export default functionExport;
