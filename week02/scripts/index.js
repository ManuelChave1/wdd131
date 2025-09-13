const DAYS = 6;
const limit = 30;
let studentReport = [11,42,33,64,29,37,44];

for (let index = 0; index < studentReport.length; index++) {
    if (studentReport[index] < limit) {
        console.log(studentReport[index]);
    }
    
}

let i = 0
while (i < studentReport.length ) {
    if(studentReport[i] < limit ) 
    {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach((item) =>{
    if(item < limit)
    {
        console.log(item);
    }
})

for(let item in studentReport)
{
    if(studentReport[item] < limit)
    {
        console.log(studentReport[item]);
    }
}

for (let index = 0; index < DAYS; index++) {
    switch (index) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Suturday");
            break;
        default:
            confirm.log("Invalid entry");
            break;
    }
    
}