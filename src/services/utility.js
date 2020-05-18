export const changeBodyTheme = (theme) => {
  switch (theme) {
    case "light":
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      break;
    case "dark":
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      break;
    default:
      document.body.classList.add("light");
  }
};
