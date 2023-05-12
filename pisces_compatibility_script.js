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
        
            var title = ["Pisces and Aquarius", "Pisces and Pisces", "Pisces and Aries","Pisces and Taurus","Pisces and Gemini", "Pisces and Cancer", "Pisces and Leo", "Pisces and Virgo", "Pisces and Libra", "Pisces and Scorpio",
            "Pisces and Saggitarius", "Pisces and Capricorn"]
            var rating = ["Dimming Slightly","Shimmering Lightly","Dulling Harshly","Shining Magnificently","Dulling Harshly","Shining Magnificently","Shimmering Lightly", "Shimmering Lightly", "Dimming Slightly","Shimmering Lightly","Dimming Slightly","Shining Magnificently"]
            var image = ["uncompatible","compatible","very_uncompatible","very_compatible","very_uncompatible","very_compatible", "compatible","compatible","uncompatible","compatible","uncompatible","very_compatible"]
            var description = ["The Water Bearer is a very scientific thinker whereas the fish is a dreamer. But they might be able to grow together if they are willing to keep open minds to each other's way of thinking.",
            "They can both unleash their super active imaginations and encourage that best out of each other. However, it would be nice for one of them to remain pragmatic. Being a water sign, two Fish might have trouble communicating their true feelings to each other.",
            "Aries is a driven self-starter who is driven to achieve, whilst the fish has a go with the flow ambience to them. And they tend to focus on different things as well. Aries tends to focus on the underlying emotions whilst Aries prefers to deal with what is right in front of them.",
            "WOWOW. Both signs are into taking it easy, and having enough bonding time together. The Bull will benefit a lot from the emotional side of Pisces, and the Fish will be a loyal companion to the Bull through thick and thin.",
            "One is quite empathetic and the other is quite rational, which can cause them to butt heads. The Twins are quite standoffish and prefer to keep their emotions to themselves, which the Fish can find frustrating.",
            "Ooowahh. The Fish prefers to walk on their own path whilst the Crab is very driven and self-motivated, and so their natures complement each other well. They are both dreamers and are very picky-choosy on who they invest their emotions in a friendship or a relationship. And they are both very sensitive of other people's feelings that they will rarely get into fights.",
            "Both signs are imaginative and creative, and so they can help each other grow and evolve as people. Both are quite expressive and honest, and so it would be hard for them to keep secrets from each other. And finally, Leo will come to appreciate Pisces's unconditional love and Leo will always brighten up the life of a Pisces.",
            "They are both similar in the sense that they are the supportive friends that everyone needs in their life, but they are also quite different, but their differences will probably not impact their relationship. They are both quite fluid, and so the grounded and methodical Virgo can learn a lot from the aritistic, mysterious and imaginative Fish.",
            "This pairing is unfortunately a little awkward. Libra likes to take charge, but Pisces prefers to wait things out, and Libra's judgemental nature can negatively impact the relationship. And both are quite ethereal and hard to pin down. One thing going for them is they are both lovers of art.",
            "Both signs are very empathetic and can understand a furiety of feelings of other people. The Scorpion especially is very good at understnading people's feelings and Pisces has a very vivid imagination, and so they would work well together in marketing. Although the passive Fish might be overwhelmed by the go-getter Scorpion.",
            "Both signs value beauty and art. In terms of personality, they don't share the greatest similarities. The Archer can come off very blunt and the Fish tends to sugarcoat things to other people. And the Archer likes things to be fast, fast, fast, whilst the peaceful fish tends to like to approach things one at a time.",
            "Both the Goat and the Fish are known for their sensitivity and kindness. Althought the Fish is a dreamer, and the Goat is practical and all about having a plan, the Fish can help Capricorn with their creativity and the Goat can help make the Fish's dream become a reality. This is quite possible because both signs are about adapting themselves to their partner."]
            
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