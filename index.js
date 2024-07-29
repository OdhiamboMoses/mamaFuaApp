const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("prev");
const homeBg = document.getElementById("home");
const imageBg = ["images/bg1.avif", "images/bg2.avif", "images/cleanup.png"];

nextBtn.addEventListener("click", function () {
  let randKey = Math.floor(Math.random() * imageBg.length);
  homeBg.style.backgroundImage = `url('${imageBg[randKey]}')`;
});

previousBtn.addEventListener("click", function () {
  let randKey = Math.floor(Math.random() * imageBg.length);
  homeBg.style.backgroundImage = `url('${imageBg[randKey]}')`;
});

// for (let i = 0; i < imageBg.length; i++) {
//   if (i >= imageBg.length) {
//     i = 0;
//     homeBg.style.backgroundImage = `url('${imageBg[i]}')`;
//   }
//   setTimeout(function () {
//     homeBg.style.backgroundImage = `url('${imageBg[i]}')`;
//   }, 1000);
// }
