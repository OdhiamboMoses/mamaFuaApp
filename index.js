const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("prev");
const homeBg = document.getElementById("home");
const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("menu-container");
const imageBg = ["images/bg1.avif", "images/bg2.avif", "images/cleanup.png"];
const closeBtn = document.getElementById("close-btn");

nextBtn.addEventListener("click", function () {
  let randKey = Math.floor(Math.random() * imageBg.length);
  homeBg.style.backgroundImage = `url('${imageBg[randKey]}')`;
});

previousBtn.addEventListener("click", function () {
  let randKey = Math.floor(Math.random() * imageBg.length);
  homeBg.style.backgroundImage = `url('${imageBg[randKey]}')`;
});

menuIcon.addEventListener("click", function () {
  if (menuContainer.style.display === "none" && menuIcon) {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
});

closeBtn.addEventListener("click", function () {
  menuContainer.style.display = "none";
});
