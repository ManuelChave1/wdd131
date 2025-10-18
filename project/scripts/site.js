let nav = document.querySelector("#primaryMenu");
let menu = document.querySelector(".nav-toggle");

function updateLayout() {
  if (window.innerWidth <= 768) {
    menu.style.display ="block";
    nav.style.display = menu.classList.contains("open") ? "block" : "none";
    nav.style.background = "#2C3E50";
  } else {
    nav.style.display = "flex";
    menu.style.display ="none";
    nav.style.background = "none";
  }
}

window.addEventListener("resize", updateLayout);
updateLayout();

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  updateLayout(); 
})

const dishes = [
  {
    id: "d1",
    name: "Frango à Zambeziana",
    category: "mains",
    price: 500,
    img: "https://github.com/ManuelChave1/wdd131/blob/main/project/images/grilled-chicken-with-coconut-sauce.webp?raw=true",
    featured: true,
    alt: "Mozambican style grilled chicken with coconut sauce"
  },
  {
    id: "d2",
    name: "Matapa",
    category: "mains",
    price: 300,
    img: "https://github.com/ManuelChave1/wdd131/blob/main/project/images/matapa.webp?raw=true",
    featured: true,
    alt: "Traditional Mozambican Matapa with cassava leaves"
  },
  {
    id: "d3",
    name: "Grilled Prawns",
    category: "mains",
    price: 800,
    img: "https://github.com/ManuelChave1/wdd131/blob/main/project/images/grilled-garlic.webp?raw=true",
    featured: true,
    alt: "Grilled prawns with garlic and herbs"
  },
  {
    id: "d4",
    name: "Cassava Chips",
    category: "starters",
    price: 80,
    img: "https://github.com/ManuelChave1/wdd131/blob/main/project/images/cassava-chips.webp?raw=true",
    featured: false,
    alt: "Crispy cassava chips starter"
  },
  {
    id: "d5",
    name: "Coconut Pudding",
    category: "desserts",
    price: 120,
    img: "https://github.com/ManuelChave1/wdd131/blob/main/project/images/coconut-pudding.webp?raw=true",
    featured: false,
    alt: "Coconut pudding dessert served cold"
  },
  {
    id: "d6",
    name: "Mango Juice",
    category: "drinks",
    price: 60,
    img: "https://github.com/ManuelChave1/wdd131/blob/main/project/images/mango-juice.webp?raw=true",
    featured: false,
    alt: "Fresh tropical mango juice"
  }
];

const featuredContainer = document.getElementById("featuredCards");
const menuGrid = document.getElementById('menuGrid');
const favoritesList = document.getElementById('favoritesList');
const categoryFilter = document.getElementById('categoryFilter');


const FAVORITES_KEY = 'sdm_favorites';
const RESERVATIONS_KEY = 'sdm_reservations';


function getFavorites(){
  const raw = localStorage.getItem(FAVORITES_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveFavorites(arr){
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
}

function toggleFavorite(dishId){
  const favs = getFavorites();
  if (!favs.includes(dishId)){
    favs.push(dishId);
    saveFavorites(favs);
    showMessage(`Added to favorites`);
  } else {
    const filtered = favs.filter(id => id !== dishId);
    saveFavorites(filtered);
    showMessage(`Removed from favorites`);
  }
  renderFavorites();
  renderMenu(currentFilter);
}


function buildFeaturedCard(d){
let article = document.createElement("article");
article.classList.add("card");
article.setAttribute("aria-labelledby", `f-${d.id}`);

let image = document.createElement("img");
image.setAttribute("src", d.img);
image.setAttribute("alt", d.alt);
image.setAttribute("loading", "lazy");

let h3 = document.createElement("h3");
h3.id = `f-${d.id}`;
h3.textContent = d.name;

let price = document.createElement("p");
price.textContent = `Price: ${d.price} MT`;

let btn = document.createElement("button");
btn.classList.add("btn");
btn.setAttribute("data-action", "fav");
btn.setAttribute("data-id", d.id);
btn.setAttribute("aria-label", `Favorite ${d.name}`);
btn.innerHTML = "❤️ Favorite";

article.appendChild(image);
article.appendChild(h3);
article.appendChild(price);
article.appendChild(btn);
return article;

}

function renderFeatured(){
  if (!featuredContainer) {
    return;
  }
  const featured = dishes.filter(d => d.featured);
  featuredContainer.innerHTML = '';
  featured.forEach(d => {
  const card = buildFeaturedCard(d);
  featuredContainer.appendChild(card);
  });
}

function buildMenuCard(d){
  const favs = getFavorites();
  const isFav = favs.includes(d.id);
  let article = document.createElement("article");
  article.classList.add("card");
  article.setAttribute("aria-labelledby", `m-${d.id}`);

  let image = document.createElement("img");
  image.setAttribute("src", d.img);
  image.setAttribute("alt", d.alt);
  image.setAttribute("loading", "lazy");

  let h3 = document.createElement("h3");
  h3.id = `m-${d.id}`;
  h3.textContent = d.name;

  let category = document.createElement("p");
  category.textContent = `Category: ${d.category}`;

  let price = document.createElement("p");
  price.textContent = `Price: ${d.price} MT`;

  let btnWrapper = document.createElement("p");

  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.setAttribute("data-id", d.id);
  btn.innerHTML = isFav ? "❤️ Favorited" : "🤍 Favorite";

  btnWrapper.appendChild(btn);

  let div = document.createElement("div");
  div.appendChild(h3);
  div.appendChild(category);
  div.appendChild(price);
  div.appendChild(btnWrapper);

  article.appendChild(image);
  article.appendChild(div);

  return article;

}

let currentFilter = 'all';
function renderMenu(filter = 'all'){
  if (!menuGrid) return;
  currentFilter = filter;
  const filtered = (filter === 'all') ? dishes : dishes.filter(d => d.category === filter);
  menuGrid.innerHTML = '';
  filtered.forEach(d => {
  const card = buildMenuCard(d);
  menuGrid.appendChild(card);
  });
}

function renderFavorites() {
  if (!favoritesList) return;
  const favs = getFavorites();
  if (favs.length === 0) {
    favoritesList.innerHTML = `<p>No favorites yet. Click the heart on a dish to add it here.</p>`;
    return;
  }

  const items = favs.map(id => dishes.find(d => d.id === id)).filter(Boolean);
  favoritesList.innerHTML = '';

  items.forEach(d => {
    let article = document.createElement("article");
    article.classList.add("card");

    let image = document.createElement("img");
    image.setAttribute("src", d.img);
    image.setAttribute("alt", d.alt);
    image.setAttribute("loading", "lazy");

    let h4 = document.createElement("h4");
    h4.textContent = d.name;

    let price = document.createElement("p");
    price.textContent = `Price: ${d.price} MT`;

    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("data-id", d.id);
    btn.textContent = "Remove";

    let div = document.createElement("div");
    div.appendChild(h4);
    div.appendChild(price);
    div.appendChild(btn);

    article.appendChild(image);
    article.appendChild(div);

    favoritesList.appendChild(article);
  });
}

function showMessage(text){
  let msg = document.getElementById('globalMessage');
  if (!msg){
    msg = document.createElement('div');
    msg.id = 'globalMessage';
    msg.setAttribute('role','status');
    msg.style.position = 'fixed';
    msg.style.right = '1rem';
    msg.style.bottom = '1rem';
    msg.style.background = '#222';
    msg.style.color = '#fff';
    msg.style.padding = '0.5rem 0.75rem';
    msg.style.borderRadius = '6px';
    document.body.appendChild(msg);
  }
  msg.textContent = `${text}`;
  setTimeout(() => { msg.textContent = ''; }, 2500);
}

function saveReservation(resObj){
  const raw = localStorage.getItem(RESERVATIONS_KEY);
  const arr = raw ? JSON.parse(raw) : [];
  arr.push(resObj);
  localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(arr));
}

document.addEventListener('click', function(e){
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const action = btn.getAttribute('data-action');
  const id = btn.getAttribute('data-id');

  if (action === 'fav'){

    toggleFavorite(id);
  } else if (action === 'remove'){
    const favs = getFavorites();
    const filtered = favs.filter(fid => fid !== id);
    saveFavorites(filtered);
    renderFavorites();
    renderMenu(currentFilter);
    showMessage('Removed from favorites');
  }
});

if (categoryFilter){
  categoryFilter.addEventListener('change', (e) => {
    renderMenu(e.target.value);
  });
}

const reservationForm = document.getElementById('reservationForm');
if (reservationForm){
  reservationForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    const fd = new FormData(reservationForm);
    const messageEl = document.getElementById('formMessage');
      if (messageEl) messageEl.textContent = fd;
    
    const reservation = {
      id: `r_${Date.now()}`,
      name: `${fd.get('name')}`,
      phone: `${fd.get('phone')}`,
      date: `${fd.get('date')}`,
      people: parseInt(fd.get('people'),10),
      notes: `${fd.get('notes') || ''}`,
      createdAt: new Date().toISOString()
    };

    saveReservation(reservation);
    if (messageEl) messageEl.textContent = `Reservation saved — ${reservation.date} for ${reservation.people} people.`;
    reservationForm.reset();
    showMessage('Reservation saved');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderMenu('all');
  renderFavorites();
  let atualDate = new Date();
  document.querySelector('.copyright').innerHTML = '&#169 ' + atualDate.getFullYear();
});
