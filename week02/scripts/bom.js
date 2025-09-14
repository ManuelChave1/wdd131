let imputFavChap = document.getElementById("favchap");
let btnAddChap = document.getElementById("btnAddChap");
let list = document.getElementById("list");


btnAddChap.addEventListener("click",()=>{
    if(imputFavChap.value.trim() === "") {
       return imputFavChap.focus();
    }

    let chapterEntry = document.createElement("li");
    const deletedButton  = document.createElement("button");

    chapterEntry.textContent = imputFavChap.value;
    deletedButton.textContent = "❌";
    deletedButton.setAttribute("aria-label", "Remove Alma 5");

    chapterEntry.append(deletedButton);
    list.append(chapterEntry);
    

    deletedButton.addEventListener("click", ()=>{
        list.removeChild(chapterEntry);
        imputFavChap.focus();

    })
     imputFavChap.value = " ";
     imputFavChap.focus();
    
});

