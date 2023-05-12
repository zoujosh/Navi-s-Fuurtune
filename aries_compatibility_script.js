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
        
            var title = ["Aries and Aquarius", "Aries and Pisces", "Aries and Aries","Aries and Taurus","Aries and Gemini", "Aries and Cancer", "Aries and Leo", "Aries and Virgo", "Aries and Libra", "Aries and Scorpio",
            "Aries and Saggitarius", "Aries and Capricorn"]
            var rating = ["Shining Magnificently","Dulling Harshly","Shining Magnificently","Dimming Slightly","Shining Magnificently","Dulling Harshly","Shining Magnificently", "Meeting in the Middle", "Shimmering Lightly","Dimming Slightly","Shimmering Lightly","Dimming Slightly"]
            var image = ["very_compatible","very_uncompatible","very_compatible","uncompatible", "very_compatible","very_uncompatible","very_compatible","average","compatible","uncompatible", "compatible", "uncompatible"]
            var description = ["These two signs are independent, motivated and free-spirited in general. The Water Bearer can keep up with the adventurous Ram and also follow through with their escapades whilst also staying safe.",
            "Aries is a driven self-starter who is driven to achieve, whilst the Fish has a go with the flow ambience to them. And they tend to focus on different things as well. Aries tends to focus on the underlying emotions whilst Aries prefers to deal with what is right in front of them.",
            "This is quite the rambunctious pairing! Aries tend to find comfort in spending time with those who are similar to them, and these two are quite the dynamic, outgoing, fiery power duo. Although some heavy conflict can occur between them since both are highly opinionated and passionate, they are quick to forgive. But if I were involved in a conflict between them, just take me on a Furrari and get me out of there because I can't stand loud people.",
            "These two signs can lock horns on many things because they are both stubborn and uncompromising. Additionally, Taurus prefers to move through life at a slow, steady pace, and take in their surroundings one at a time while Aries tends to have a much shorter fuse and overthink multiple things at the same time.",
            "Pawsibbly the best pairing for Aries! They are both playful, adventutous and take pleasure in experiencing things as fast-paced as possible. The Ram is also quite ambitious, and the Twins can help the Ram achieve their ambitions as well. They are also great communicators and enjoy intellectual discussions.",
            "Eeerrm, it's a flop. They are both take-charge initiators but need someone else to help them follow through. Cancer tends to have a sweet and empathetic nature while the Ram can come off as a bit blunt.",
            "These two signs are both quite adventurous, the life of the party, and make big strides to achieve their ambitions. Both signs are quite domineering at heart, and so they will need to learn when to take turns, which can be a good thing because these two signs need to learn to be vulnerable at times.",
            "Fur me, this pairing is as middling as a pairing can be. Both signs are open-minded, and so they can learn from each other as Virgo is quite composed whereas Aries is quite impulsive but fun. They might have a lot of conflicting opinions on a furiety of subjects but Virgo is willing to take a back seat and listen to others.",
            "Both signs are quite playful and humorous. Plus, Libra is quite the people person, and so Libra can teach the Ram how to be more likable. Aries, at heart, is quite passionate and ambitious and will all back up those they care about so honestly these two would make a fantastic friend duo that will brighten up their friends' days.",
            "They are both prone to losing their tempers and Scorpio can find an Aries's lighthearted, playful nature a turn off since Scorpio is quite intense. Power struggles are also quite common between this pairing.",
            "Aries can make Scorpio feel like a gnawty child again, and the Archer can teach the Ram how to open their heart to the world. Both are generally energetic and fun-loving, although Aries likes to take shortcuts while the Archer prefers to gather information and make calculated judgement calls.",
            "Aries is about going as fast as possible and Capricorn is about taking slow, steady steps to the finish line. Although both signs are known for taking on challenging projects, their personalities can clash significantly."]
            
            document.getElementById("title").style.visibility = 'visible';
            document.getElementById("compatibility").style.visibility = 'visible';
            document.getElementById("description").style.visibility = 'visible';
            
        //Display appropriate text for each div.
            document.getElementById("title").innerHTML = title[horoscope];
            document.getElementById("compatibility").innerHTML = rating[horoscope];
            document.getElementById("description").innerHTML = description[horoscope];
        
        //Setting smaller font sizes for large descriptions.
            if (horoscope == 2 || horoscope == 3 || horoscope == 7 || horoscope == 8){
                document.getElementById("description").style.fontSize = "small";
            }
        
            else{
                document.getElementById("description").style.fontSize = "medium";
            }
                    
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