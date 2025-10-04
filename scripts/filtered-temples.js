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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
   {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, may, 17",
    area: 48100,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
   {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, october, 30",
    area: 59246,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
    {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/7-760a7137d9c6b9de08fa46c5cf540cb997d62c50.jpg"
  },
];

function createGridTemple(temple)
{
    document.querySelector(".card-grid").textContent = "";
    temple.forEach(temple =>{
        let templeCard = document.createElement("section");
        let templeName = document.createElement("h3");
        let templeLocation = document.createElement("p");
        let templeDedicatedInf = document.createElement("p");
        let templeSize = document.createElement("p");
        let templeImage = document.createElement("img");
        
        templeCard.style.flex = " 1 1 150px";
        templeCard.style.textAlign = "center";
         templeImage.style.margin = "10px 0" 
        templeImage.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.6)";
        templeName.textContent =temple.templeName;
        templeLocation.innerHTML =`Location : ${temple.location} `;
        templeDedicatedInf.textContent = `Dedicated : ${temple.dedicated}`;
        templeSize.textContent = `Size : ${temple.area}`;
        templeImage.setAttribute("src",temple.imageUrl);
        templeImage.setAttribute("alt", `${temple.templeName} temple`);
        templeImage.setAttribute("load", "lazy");
        
        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicatedInf);
        templeCard.appendChild(templeSize);
        templeCard.appendChild(templeImage);

        let templeCardGrid = document.querySelector(".card-grid");
        templeCardGrid.appendChild(templeCard);

    })
}

createGridTemple(temples);

let home = document.querySelector("#home")
home.addEventListener("click", () => {
  createGridTemple(temples);
})
let oldTemples = document.querySelector("#oldTemples");
oldTemples.addEventListener("click", () => {
    createGridTemple(temples.filter(temple => parseFloat(temple.dedicated.split(",")[0]) < 1900));
})

let newTemples = document.querySelector("#newTemples");
newTemples.addEventListener("click", () => {
    createGridTemple(temples.filter(temple => parseFloat(temple.dedicated.split(",")[0]) >2000));
});

let largerTemples = document.querySelector("#largarTemples");

largerTemples.addEventListener("click", () => {
    createGridTemple(temples.filter(temple => temple.area > 90000));
});

let smallerTemples = document.querySelector("#smallerTemples");
smallerTemples.addEventListener("click", () => {
    createGridTemple(temples.filter(temple => temple.area < 10000));
});

