const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  setTheme(true);
} else if (savedTheme === "light") {
  setTheme(false);
}

function setTheme(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "Тема";
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "Тема";
  }
}

toggleButton.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark-mode");
  setTheme(isDark);
});