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
        
            var title = ["Capricorn and Aquarius", "Capricorn and Pisces", "Capricorn and Aries","Capricorn and Taurus","Capricorn and Gemini", "Capricorn and Cancer", "Capricorn and Leo", "Capricorn and Virgo", "Capricorn and Libra", "Capricorn and Scorpio",
            "Capricorn and Saggitarius", "Capricorn and Capricorn"]
            var rating = ["Meeting in the Middle", "Shining Magnificently","Dimming Slightly","Shining Magnificently", "Dulling Harshly", "Shimmering Lightly", "Dimming Slightly", "Shining Magnificently", "Dulling Harshly", "Shimmering Lightly", "Dimming Slightly", "Shimmering Lightly"]
            var image = ["average", "very_compatible", "uncompatible", "very_compatible", "very_uncompatible", "compatible", "uncompatible", "very_compatible", "very_uncompatible", "compatible", "uncompatible", "compatible"]
            var description = [          
            "Aquarius generally prioritizes what is best for a community while Capricorn is mainly concerned about the challenges they face on their own path. Additionally, the Goat generally avoids social situations that the Water Bearer would engage in. But if they are willing to learn from each other, they can pawwsibbly become a dynamic duo.",
            "Both the Goat and the Fish are known for their sensitivity and kindness. Althought the Fish is a dreamer, and the Goat is practical and all about having a plan, the Fish can help Capricorn with their creativity and the Goat can help make the Fish's dream become a reality. This is quite possible because both signs are about adapting themselves to their partner.",
            "Aries is about going as fast as possible and Capricorn is about taking slow, steady steps to the finish line. Although both signs are known for taking on challenging projects, their personalities can clash significantly.",
            "OH FURREAL?!? One of my favfurrite pairings. These two signs are so alike in personality; they are strong-willed, practical, down-to-earth and honest. And they find something to admire in each other: the Goat loves the persistence of the Bull and the Bull loves the quiet confidence of the Goat. UGH i GeT so TUrNEd On ThiNKinG aBOuT tHe TWo ToGETHeR.",
            "Oh my. Gemini is all about doing things on a whim with no concrete plan and the Goat is all about strict boundaries and study procedures. And also, KEHEHE, both are great liars and have a tendency to be possessive and jealous. I can see where that can lead to.",
            "These two signs are quite compatible, but are opposites in personality. Cancer's thoughtful and considerate personality can eventually break down the Goat's emotional walls. The Goat is quite loyal by nature and will provide the companionship the Crab desires. They both provide something that the other desires, and they are both disciplined and hardworking to make a relationship work between them.",
            "This pairing is furrrly tame, but it tends to lead towards the negative side. Leo is very emotional and Capricorn doesn't deal well with extreme mood swings. And although both are quite ambitious, Leo works towards being recognized and craving appawse to satisfy their heart, whilst Capricorn works towards accumulating an impressive portfolio.",
            "OwO. Both are very loyal and honest with each other so that's a plus! They are equally pragmatic, dedicated and are willing to work from the ground up. While Carpciorn desires achievement and success, Virgo is happy with handling day-to-day tasks to keep them both afloat.",
            "Oh my. The grounded and somewhat stoic Goat does not go well with the lightedhearted Libra. They are also very unwilling to have heart-to-heart conversations, which could slowly damage their relationship over time.",
            "Hermmm. They can make quite the power couple because both are determined to have power, be recognized and achieve great things in life. The emotional intuition of the Scorpion can read the closed-off Goat quite well, however their quiet and loud natures can sometimes clash.",
            "It is quite possible that the Archer can help the Goat unlock their inner adventurous spirit. But their personalities are quite opposite, and the Goat can find the Archer naive, whilst the Archer can find the Goat quite pessimistic.",
            "UEgh. Talk about a power couple! These two will help each ther tackle the next project, or help each other reach the next plateau. Although both can be quite closed-off, they can treat any relationship problems between each other as the next project to tackle."
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