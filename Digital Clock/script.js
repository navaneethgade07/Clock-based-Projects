function currentTime() {
    let a;
    a = new Date();
    let h;
    h = a.getHours();
    let m;
    m = a.getMinutes();
    let s;
    s = a.getSeconds();
    let session;
    session = "AM";

    if( h == 0 ){
        h = 12;
    }
    if( h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h ;
    m = (m < 10) ? "0" + m : m ;
    s = (s < 10) ? "0" + s : s ;
    
    document.getElementById("clock-hours").innerHTML = h;
    document.getElementById("clock-minutes").innerHTML = m;
    document.getElementById("clock-seconds").innerHTML = s;
    document.getElementById("clock-session").innerHTML = session;

}
setInterval(function(){
    currentTime()
} , 1000)
