window.onload = function () {
    chrome.storage.sync.get(['year'], function (h){
        
        var updateDate = new Date();
        var updateYear = updateDate.getFullYear();

        var isLeap = (updateYear % 400 == 0) || (updateYear % 100 != 0 && updateYear % 4 == 0);

        if (!isLeap) {
            document.querySelector("#feb28").style.transitionDuration = "0s";
            document.querySelector("#feb28").style.visibility = "hidden";
        }

        chrome.storage.sync.get(['calendar'], function (e) {

            var calUpdate = e.calendar;

            for (let month = 0; month < calUpdate.length; month++) {
                for (let day = 0; day < calUpdate[month].length; day++) {
                    //January
                    if (month == 0){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#jan" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#jan" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#jan" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#jan" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#jan" + day).style.background = "#a2a7b4";
                      }
                    }
                    //February
                    if (month == 1){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#feb" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#feb" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#feb" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#feb" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#feb" + day).style.background = "#a2a7b4";
                      }
                    }
                    //March
                    if (month == 2){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#mar" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#mar" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#mar" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#mar" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#mar" + day).style.background = "#a2a7b4";
                      }
                    }
                    //April
                    if (month == 3){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#apr" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#apr" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#apr" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#apr" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#apr" + day).style.background = "#a2a7b4";
                      }
                    }
                    //May
                    if (month == 4){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#may" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#may" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#may" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#may" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#may" + day).style.background = "#a2a7b4";
                      }
                    }
                    //June
                    if (month == 5){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#jun" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#jun" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#jun" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#jun" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#jun" + day).style.background = "#a2a7b4";
                      }
                    }
                    //July
                    if (month == 6){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#jul" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#jul" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#jul" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#jul" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#jul" + day).style.background = "#a2a7b4";
                      }
                    }
                    //August
                    if (month == 7){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#aug" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#aug" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#aug" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#aug" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#aug" + day).style.background = "#a2a7b4";
                      }
                    }
                    //September
                    if (month == 8){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#sep" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#sep" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#sep" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#sep" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#sep" + day).style.background = "#a2a7b4";
                      }
                    }
                    //October
                    if (month == 9){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#oct" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#oct" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#oct" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#oct" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#oct" + day).style.background = "#a2a7b4";
                      }
                    }
                    //November
                    if (month == 10){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#nov" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#nov" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#nov" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#nov" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#nov" + day).style.background = "#a2a7b4";
                      }
                    }
                    //December
                    if (month == 9){
                      if (calUpdate[month][day] == 1){
                          document.querySelector("#dec" + day).style.background = "#1167b1";
                      }
                      else if (calUpdate[month][day] == 2){
                          document.querySelector("#dec" + day).style.background = "#3777b0";
                      }
                      else if (calUpdate[month][day] == 3){
                          document.querySelector("#dec" + day).style.background = "#5788b3";
                      }
                      else if (calUpdate[month][day] == 4){
                          document.querySelector("#dec" + day).style.background = "#7988b3";
                      }
                      else if (calUpdate[month][day] == 5){
                          document.querySelector("#dec" + day).style.background = "#a2a7b4";
                      }
                    }
                }
            }
        });
    });
    
    chrome.storage.sync.get(['calendar'], function (z) {
        
        var ratings = z.calendar;
        
        for (let i = 0; i <= 30; i++){
            document.getElementById("jan" + i).onmouseover = function () {
                hoverJan(i+1);
            };
            document.getElementById("mar" + i).onmouseover = function () {
                hoverMar(i+1);
            };
            document.getElementById("may" + i).onmouseover = function () {
                hoverMay(i+1);
            };
            document.getElementById("jul" + i).onmouseover = function () {
                hoverJul(i+1);
            };
            document.getElementById("aug" + i).onmouseover = function () {
                hoverAug(i+1);
            };
            document.getElementById("oct" + i).onmouseover = function () {
                hoverOct(i+1);
            };
            document.getElementById("dec" + i).onmouseover = function () {
                hoverDec(i+1);
            };
        }

        for (let i = 0; i <= 29; i++){
            document.getElementById("apr" + i).onmouseover = function () {
                hoverApr(i+1);
            };
            document.getElementById("jun" + i).onmouseover = function () {
                hoverJun(i+1);
            };
            document.getElementById("sep" + i).onmouseover = function () {
                hoverSep(i+1);
            };
            document.getElementById("nov" + i).onmouseover = function () {
                hoverNov(i+1);
            };
        }

        for (let i = 0; i <= 28; i++){
            document.getElementById("feb" + i).onmouseover = function (){
                hoverFeb(i+1);
            }
        }
        
        var accuracy = ["very accurate", "accurate", "ok accuracy", "innacurate", "very inaccurate"];
        
        function hoverJan(day){
            if (ratings[0][day-1] === null){
               document.querySelector("#date").innerHTML = "January " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "January " + day + " : " + accuracy[ratings[0][day-1] - 1]; 
            }
        }
        function hoverFeb(day){
            if (ratings[1][day-1] === null){
               document.querySelector("#date").innerHTML = "February " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "February " + day + " : " + accuracy[ratings[1][day-1] - 1]; 
            }
        }
        function hoverMar(day){
            if (ratings[2][day-1] === null){
               document.querySelector("#date").innerHTML = "March " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "March " + day + " : " + accuracy[ratings[2][day-1] - 1]; 
            }
        }
        function hoverApr(day){
            if (ratings[3][day-1] === null){
               document.querySelector("#date").innerHTML = "April " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "April " + day + " : " + accuracy[ratings[3][day-1] - 1]; 
            }
        }
        function hoverMay(day){
            if (ratings[4][day-1] === null){
               document.querySelector("#date").innerHTML = "May " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "May " + day + " : " + accuracy[ratings[4][day-1] - 1]; 
            }
        }
        function hoverJun(day){
            if (ratings[5][day-1] === null){
               document.querySelector("#date").innerHTML = "June " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "June " + day + " : " + accuracy[ratings[5][day-1] - 1]; 
            }
        }
        function hoverJul(day){
            if (ratings[6][day-1] === null){
               document.querySelector("#date").innerHTML = "July " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "July " + day + " : " + accuracy[ratings[6][day-1] - 1]; 
            }
        }
        function hoverAug(day){
            if (ratings[7][day-1] === null){
               document.querySelector("#date").innerHTML = "August " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "August " + day + " : " + accuracy[ratings[7][day-1] - 1]; 
            }
        }
        function hoverSep(day){
            if (ratings[8][day-1] === null){
               document.querySelector("#date").innerHTML = "September " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "September " + day + " : " + accuracy[ratings[8][day-1] - 1]; 
            }
        }
        function hoverOct(day){
            if (ratings[9][day-1] === null){
               document.querySelector("#date").innerHTML = "October " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "October " + day + " : " + accuracy[ratings[9][day-1] - 1]; 
            }
        }
        function hoverNov(day){
            if (ratings[10][day-1] === null){
               document.querySelector("#date").innerHTML = "November " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "November " + day + " : " + accuracy[ratings[10][day-1] - 1]; 
            }
        }
        function hoverDec(day){
            if (ratings[11][day-1] === null){
               document.querySelector("#date").innerHTML = "December " + day + " : no data"; 
            }
            else{
               document.querySelector("#date").innerHTML = "December " + day + " : " + accuracy[ratings[11][day-1] - 1]; 
            }
        }
    });
}
                            