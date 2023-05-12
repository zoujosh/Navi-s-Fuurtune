window.onload = function () {
    
    document.getElementById("aquarius").onmouseover = function () {
        hover(0);
    };

    document.getElementById("pisces").onmouseover = function () {
        hover(1);
    };

    document.getElementById("aries").onmouseover = function () {
        hover(2);
    };

    document.getElementById("taurus").onmouseover = function () {
        hover(3);
    };

    document.getElementById("gemini").onmouseover = function () {
        hover(4);
    };

    document.getElementById("cancer").onmouseover = function () {
        hover(5);
    };

    document.getElementById("leo").onmouseover = function () {
        hover(6);
    };

    document.getElementById("virgo").onmouseover = function () {
        hover(7);
    };

    document.getElementById("libra").onmouseover = function () {
        hover(8);
    };

    document.getElementById("scorpio").onmouseover = function () {
        hover(9);
    };

    document.getElementById("saggitarius").onmouseover = function () {
        hover(10);
    };

    document.getElementById("capricorn").onmouseover = function () {
        hover(11);
    };

    function hover(horoscope) {
            const title_selector = document.querySelector('.title');
            const compatibility_selector = document.querySelector('.compatibility');
            const description_selector = document.querySelector('.description');
        
            var title = ["Taurus and Aquarius", "Taurus and Pisces", "Taurus and Aries","Taurus and Taurus","Taurus and Gemini", "Taurus and Cancer", "Taurus and Leo", "Taurus and Virgo", "Taurus and Libra", "Taurus and Scorpio",
            "Taurus and Saggitarius", "Taurus and Capricorn"]
            var rating = ["Dulling Harshly","Shining Magnificently","Dimming Slightly"]
            var image = ["very_uncompatible","very_compatible","uncompatible"]
            var description = [ "Oof. This could easily become an infuuuriating relationship for the two of them. They are both set in their ways, and the Water Bearer is highly adaptable and needs change in their life, while the the Bull prefers a routine. They can eaily become taken aback by each other's way of life.",
            "WOWOW. Both signs are into taking it easy, and having enough bonding time together. The Bull will benefit a lot from the emotional side of Pisces, and the Fish will be a loyal companion to the Bull through thick and thin.",
            "These two signs can lock horns on many things because they are both stubborn and uncompromising. Additionally, Taurus prefers to move through life at a slow, steady pace, and take in their surroundings one at a time while Aries tends to have a much shorter fuse and overthink multiple things at the same time."
            ]
            
            document.getElementById("title").style.visibility = 'visible';
            document.getElementById("compatibility").style.visibility = 'visible';
            document.getElementById("description").style.visibility = 'visible';
            document.getElementById("navi").style.visibility = 'visible';
            
        if (rating[horoscope] == "Shining Magnificently"){
            document.getElementById("navi").style.backgroundImage = "Images/very_compatible.png";
        }
        //Display appropriate text for each div.
            document.getElementById("title").innerHTML = title[horoscope];
            document.getElementById("compatibility").innerHTML = rating[horoscope];
            document.getElementById("description").innerHTML = description[horoscope];
        
        //Setting smaller font sizes for large descriptions.
            /*if (){
                document.getElementById("description").style.fontSize = "small";
            }
        
            else{
                document.getElementById("description").style.fontSize = "medium";
            }*/
                    
        //Add and removing animations to replay them
            title_selector.classList.remove('animate__animated', 'animate__flipInY');
            compatibility_selector.classList.remove('animate__animated', 'animate__fadeInLeft');
            description_selector.classList.remove('animate__animated', 'animate__heartBeat');
        
            void title_selector.offsetWidth;
            void compatibility_selector.offsetWidth;
            void description_selector.offsetWidth;
            
            title_selector.classList.add('animate__animated', 'animate__flipInY');
            compatibility_selector.classList.add('animate__animated', 'animate__fadeInLeft');
            description_selector.classList.add('animate__animated', 'animate__heartBeat');
            
    }
}