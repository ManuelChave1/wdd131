let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let title = document.querySelector(".title");



menu.addEventListener("click", ()=>{
  if(window.matchMedia("(max-width:760px)").matches)
    {
        menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open")

    title.style.display = isOpen ? "none" : " block";
    nav.style.display = isOpen ? "block" :"none";
    }
})
