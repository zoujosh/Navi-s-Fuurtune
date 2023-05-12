var date = new Date();  
var day = date.getDate();  
const m_array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = m_array[date.getMonth()];

var year = date.getFullYear();

if (day == 1){
    document.write(month + " " + day + "st " + year);
}

else if (day == 2){
    document.write(month + " " + day + "nd " + year);
}

else if (day == 3){
    document.write(month + " " + day + "rd " + year);
}

else{
    document.write(month + " " + day + "th " + year);
}