



var hour = 0;
var min =0;
var sec =0;
var milisec=0;
var interval ;


var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milisecHeading = document.getElementById("milisec");

function setTimer() {

    milisec++;
    if (milisec.length < 3) {
        milisec ='00' + milisec;
        milisecHeading.innerHTML = milisec;
    }
    else
        milisecHeading.innerHTML = milisec;
    
    if (milisec>=100) {
        sec++;
        if (sec.length < 2) {
            sec ='0' + sec;
            secHeading.innerHTML = sec;
        }
        else        
            secHeading.innerHTML = sec;
        
        milisec = 000;
        if (sec>=60) {
            min++;
            if (min.length < 2) {
                min ='0' + min;
                minHeading.innerHTML = min;
            }
            else
                minHeading.innerHTML = min;
            sec=00;
            if (min>=60) {
                hour++;
                if (hour.length < 2) {
                    hour ='0' + hour;
                    hourHeading.innerHTML = hour;
                }
                else                
                    hourHeading.innerHTML = hour;
                min=00;
                if (hour>=24) {
                    hour = '0'+1;
                    
                }
                
            }
            
        }
        
    }
}


function start() {
    interval = setInterval(setTimer,10);    
}

function stop() {
    clearInterval(interval)
}

function reset() {
    milisecHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    minHeading.innerHTML = 0;
    hourHeading.innerHTML = 0;
        
    
}
