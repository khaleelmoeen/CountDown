
function formatTodayDate(){
    let newDate = new Date()

    let year = newDate.getFullYear();

    let month = newDate.getMonth()+1;
    if (month < 10 ){month = "0"+month}

    let day = newDate.getDate();
    if (day < 10){day = "0"+day}

    let hours = Math.floor((newDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10){hours = "0"+hours}

    let mins = Math.floor((newDate % (1000 * 60 * 60)) / (1000 * 60) );
    if (mins < 10){mins = "0"+mins}

    let theformat = `${year}-${month}-${day}T${hours}:${mins}`
    return theformat;
}


let d = document.getElementById('setDate');
d.min = formatTodayDate();

function set() {

let d = document.getElementById('setDate').value;
let launchDate =  new Date(d).getTime();
let timer = setInterval(tick,1000)


    function tick(){

        let now =  new Date().getTime();
        
        let t = launchDate - now;
        

        if (t > 0){
            let days  = Math.floor(t/ (1000 * 60 * 60 * 24))
            if (days < 10){days = "0"+days}

            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10){hours = "0"+hours}

            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60) );
            if (mins < 10){mins = "0"+mins}

            let secs = Math.floor((t % (1000 * 60))/ 1000);
            if (secs < 10){secs = "0"+secs}
            


            const daysEl = document.getElementById('days').innerText = days;
            const hoursEl =document.getElementById('hours').innerText = hours; 
            const minsEl = document.getElementById('mins').innerText = mins;
            const secEl = document.getElementById('sec').innerText = secs;
            const massge = document.getElementById('massge').innerText;


        }
    }


}