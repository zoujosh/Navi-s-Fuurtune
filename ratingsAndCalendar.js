window.onload = function () {
    var date = new Date();
    var newMonth = date.getMonth();
    var newDay = date.getDate();
    var newYear = date.getFullYear();

    chrome.storage.sync.get(['year'], function (e) {
        var currentYear = e.year;
        
        //If it's a new year, create a replacement year array
        if (newYear !== currentYear) {
            chrome.storage.sync.set({
                year: newYear
            });
            const yearGraph = new Array(12);
            var isLeap = (newYear % 400 == 0) || (newYear % 100 !== 0 && newYear % 4 == 0);

            yearGraph[0] = new Array(31);

            if (isLeap) {
                yearGraph[1] = new Array(29);
            } else {
                yearGraph[1] = new Array(28);
            }

            yearGraph[2] = new Array(31);
            yearGraph[3] = new Array(30);
            yearGraph[4] = new Array(31);
            yearGraph[5] = new Array(30);
            yearGraph[6] = new Array(31);
            yearGraph[7] = new Array(31);
            yearGraph[8] = new Array(30);
            yearGraph[9] = new Array(31);
            yearGraph[10] = new Array(30);
            yearGraph[11] = new Array(31);

            chrome.storage.sync.set({
                calendar: yearGraph
            });
        }
    });
    
    //Interacting with buttons
    for (let i = 1; i <= 5; i++){
        document.querySelector("#b" + i).addEventListener('click', () => {

            chrome.storage.sync.set({
                currButton: i
            });
            
            window.location.href = 'calendar.html';
             chrome.storage.sync.get(['calendar'], function (f) {

                var updatedCalendar = f.calendar;
                updatedCalendar[newMonth][newDay - 1] = i;

                chrome.storage.sync.set({
                    calendar: updatedCalendar
                }, function () {

                });
            });

        });
        document.getElementById("b" + i).onmouseover = function () {
            hover(i);
        };

        document.getElementById("b" + i).onmouseout = function () {
            mouseout();
        };
    }
    function hover(accuracy) {
        var rating = ["You really predicted the future bestie!", "fairly accurate", "eh", "somewhat unaccurate", "You flopped so hard."]
        document.getElementById("accuracy").innerHTML = rating[accuracy - 1];
        if (accuracy == 1){
            document.getElementById("show_accuracy").src = "Images/very_accurate.png";
        }
        else if (accuracy == 2){
            document.getElementById("show_accuracy").src = "Images/accurate.png";
        }
        else if (accuracy == 3){
            document.getElementById("show_accuracy").src = "Images/ok_accuracy.png";
        }
        else if (accuracy == 4){
            document.getElementById("show_accuracy").src = "Images/inaccurate.png";
        }
        else if (accuracy == 5){
            document.getElementById("show_accuracy").src = "Images/very_unaccurate.png";
        }
    }

    function mouseout() {
        document.getElementById("accuracy").innerHTML = "&nbsp;";
        document.getElementById("show_accuracy").src = "Images/blank.png";
    }
}