window.onload = function () {
    
    var first_card = getRandomInteger(); 
    var second_card = getRandomInteger(); 
    while (second_card === first_card){
        second_card = getRandomInteger();
    }
    var third_card = getRandomInteger(); 
    while (third_card === first_card || third_card === second_card){
        third_card = getRandomInteger();
    }
    
    var title = ["Rushing Waters", "Wings of the Azure Butterfly", ""]
    var card_description = ["one","two","three","four","five","six","seven","eight","nine","ten"]
    
    document.getElementById("premier_card").innerHTML = card_description[first_card];
    document.getElementById("deuxieme_card").innerHTML = card_description[second_card];
    document.getElementById("troisieme_card").innerHTML = card_description[third_card];
    
    //Generate an integer between 0 and 9.
    function getRandomInteger() {
        return Math.floor(Math.random() * (10 - 0) + 0); 
    }
    
    chrome.storage.sync.get(['horoscope'], function (j) {
        var curr_Horoscope = j.horoscope;
        
        //back button is embedded to the right horoscope page
        if (curr_Horoscope == 0){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'aquarius.html';
            });
        }
        
        else if (curr_Horoscope == 1){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'pisces.html';
            });
        }
        
        else if (curr_Horoscope == 2){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'aries.html';
            });
        }
        
        else if (curr_Horoscope == 3){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'taurus.html';
            });
        }
        
        else if (curr_Horoscope == 4){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'gemini.html';
            });
        }
        
        else if (curr_Horoscope == 5){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'cancer.html';
            });
        }
        
        else if (curr_Horoscope == 11){
            document.querySelector("#back").addEventListener('click', () => {
                window.location.href = 'capricorn.html';
            });
        }
    });
}