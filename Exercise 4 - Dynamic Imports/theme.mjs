let theme = null;

export const setLightTheme = () => {
  console.log("Setting light theme.");
  document.body.style.backgroundColor = "blue";
  theme = "light";
};

export const setDarkTheme = () => {
  console.log("Setting dark theme.");
  document.body.style.backgroundColor = "black";
  theme = "dark";
};
