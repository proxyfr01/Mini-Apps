const btn = document.getElementById("toggleBtn");


if (localStorage.getItem("theme") === "dark") {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

btn.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("theme", "light");
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark");
  }
});