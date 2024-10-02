
var hourSp = (document.getElementById("hours"));
var minSp = (document.getElementById("min"));
var secSp = (document.getElementById("sec"));


let dateEl = document.getElementById('date');

setInterval(() => {
    var time = new Date();
    dateEl.innerHTML = time.toLocaleDateString("en-US",{month:"short",weekday:"long",day:"numeric"})

    if(time.getHours() < 12 ) {
    hourSp.innerText = time.getHours() + ":";
    minSp.innerText = time.getMinutes()+ ":";
    secSp.innerText = time.getUTCSeconds() + ":" + "am";

    }else{
hourSp.innerText = time.getHours() - 12 + ":";
minSp.innerText = time.getMinutes()+ ":";
secSp.innerText = time.getUTCSeconds() + ":" + "am";
    }


}, 1000)
