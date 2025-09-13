let imputFavChap = document.getElementById("favchap");
let btnAddChap = document.getElementById("btnAddChap");
let list = document.getElementById("list");
let chapterEntry = document.createElement("li");
const deletedButton  = document.createElement("button");

chapterEntry.textContent = imputFavChap.value;
deletedButton.textContent = "❌";
chapterEntry.append(deletedButton);
list.append(chapterEntry);