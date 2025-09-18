let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let title = document.querySelector(".title");


function updateLayout() {
  if (window.innerWidth <= 768) {

    nav.style.display = menu.classList.contains("open") ? "block" : "none";
    title.style.display = menu.classList.contains("open") ? "none" : "block";
  } else {
 
    nav.style.display = "flex";
    title.style.display = "block";
  }
}

window.addEventListener("resize", updateLayout);
updateLayout();

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  updateLayout(); 
})
