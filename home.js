window.onload = function () {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    
    //Track the horoscope that was selected
    document.querySelector("#aquarius").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 0
            });
    });
    
    document.querySelector("#pisces").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 1
            });
    });
    
    document.querySelector("#aries").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 2
            });
    });
    
    document.querySelector("#taurus").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 3
            });
    });
    
    document.querySelector("#gemini").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 4
            });
    });
    
    document.querySelector("#cancer").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 5
            });
    });
    
    document.querySelector("#capricorn").addEventListener('click', () => {

            chrome.storage.sync.set({
                horoscope: 11
            });
    });
    
    // Display date in top left corner
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
    if (day == 1){
        document.getElementById("date").innerHTML = months[month] + " " + day + "st " + year;
    }

    else if (day == 2){
        document.getElementById("date").innerHTML = months[month] + " " + day + "nd " + year;
    }

    else if (day == 3){
       document.getElementById("date").innerHTML = months[month] + " " + day + "rd " + year;
    }

    else{
        document.getElementById("date").innerHTML = months[month] + " " + day + "th " + year;
    }
}