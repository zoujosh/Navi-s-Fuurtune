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
        
            var title = ["Aquarius and Aquarius", "Aquarius and Pisces", "Aquarius and Aries","Aquarius and Taurus","Aquarius and Gemini", "Aquarius and Cancer", "Aquarius and Leo", "Aquarius and Virgo", "Aquarius and Libra", "Aquarius and Scorpio",
            "Aquarius and Saggitarius", "Aquarius and Capricorn"]
            var rating = ["Meeting in the Middle", "Dimming Slightly", "Shining Magnificently", "Dulling Harshly", "Shining Magnificently", "Dulling Harshly", "Shimmering Lightly", "Dimming Slightly", "Shimmering Lightly", "Dulling Harshly", "Shimmering Lightly", "Meeting in the Middle"]
            var image = ["average","uncompatible","very_compatible", "very_uncompatible","very_compatible","very uncompatible","compatible","uncompatible", "compatible", "very_uncompatible","compatible", "average"]
            var description = [
            "Two Water Bearers can easily become instant friends. They can easily find hours of enjoyment in interacting with each other's friend groups as well. However, due to a Water Bearers black-and-white way of thinking, they can also argue with the other Aquarian for hours upon hours.", 
            "The Water Bearer is a very scientific thinker whereas the fish is a dreamer. But they might be able to grow together if they are willing to keep open minds to each other's way of thinking.", 
            "These two signs are independent, motivated and free-spirited in general. The Water Bearer can keep up with the adventurous Ram and also follow through with their escapades whilst also staying safe.",
            "Oof. This could easily become an infuuuriating relationship for the two of them. They are both set in their ways, and the Water Bearer is highly adaptable and needs change in their life, while the the Bull prefers a routine. They can eaily become taken aback by each other's way of life.",
            "They are both intellectuals who are also socially charged. These two could eaily become soulmates in both a romantic and friendship sense.",
                 "This is just gnawwwt it. The Water Bearer mainly relies on their rational thought, whilst the Crab is an empath who relies on their emotions. The Crab prefers to blend in whilst the Water Bearer prefers to stand out.",
            "Hmph. Exactly opposing on the wheel. They can both be impressed by each other's best qualities. Aquarius can find the way a Leo acts in a social situation schmexy, while the Lion can be impressed by the Water Bearer's groundbreaking ideas. However, the coldness exuded from the former and the warmth from the latter could cause them to clash.",
            "Their rational mindsets and personability are just where the similarities end. The Maiden is a rule-abiding perfectionist and the Water Bearer is known for being a rebel.",
            "The two are both air signs which means that they are both thinkers and communicators. They can thrive in a friendship as they can find themselves talking and bonding over any subject for hours. However, Libra is known to be a bit old-fashioned which Aquarius can find somewhat boring.",
            "Fuurstly, Aquarius is free-spritied, while the Snake can be quite possessive. And also, the Water Bearer taps into the world in a very logical and contranarian way, whilst the snake can't help but be very intuiting. Not a good match.",
            "The Archer is generally very open-minded, and so they can understand the Water's Bearers out-there but stubborn personality. They are both truth-seekers as well.",
            "Aquarius generally prioritizes what is best for a community while Capricorn is mainly concerned about the challenges they face on their own path. Additionally, the Goat generally avoids social situations that the Water Bearer would engage in. But if they are willing to learn from each other, they can pawwsibbly become a dynamic duo."
            ]
            
            document.getElementById("title").style.visibility = 'visible';
            document.getElementById("compatibility").style.visibility = 'visible';
            document.getElementById("description").style.visibility = 'visible';
            
        //Display appropriate text for each div.
            document.getElementById("title").innerHTML = title[horoscope];
            document.getElementById("compatibility").innerHTML = rating[horoscope];
            document.getElementById("description").innerHTML = description[horoscope];
            
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