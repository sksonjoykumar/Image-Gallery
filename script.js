// Selected all html id and class
const scrollBtn = document.querySelector(".wrapper-container");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// window.onload
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  scrollBtn.addEventListener("wheel", function (event) {
    event.preventDefault();
    scrollBtn.scrollLeft += event.deltaY;
    scrollBtn.style.scrollBehavior = "auto";
  });
  backBtn.addEventListener("click", function () {
    scrollBtn.style.scrollBehavior = "smooth";
    scrollBtn.scrollLeft += 70;
  });

  nextBtn.addEventListener("click", function () {
    scrollBtn.style.scrollBehavior = "smooth";
    scrollBtn.scrollLeft -= 70;
  });
}
