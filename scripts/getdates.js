// All date information that is currently needed throughout of the program
let atualDate = new Date();
let day = atualDate.getDate();          
let month = atualDate.getMonth() + 1;   
let year = atualDate.getFullYear();     
let hour = atualDate.getHours();        
let minutes = atualDate.getMinutes();   
let seconds = atualDate.getSeconds();

//Date formatation to handle 0 in front of month number eg. 09 instead of 9
let format = (num) => num.toString().padStart(2, "0");
let dateFormated =  `${format(day)}/${format(month)}/${year} ${format(hour)}:${format(minutes)}:${format(seconds)}`

let copyRightYear = document.querySelector('.copyright').innerHTML = '&#169 ' + atualDate.getFullYear();
let lastModification = document.querySelector('.lastModification');

lastModification.textContent = `Last Modification:  ${dateFormated}`;
