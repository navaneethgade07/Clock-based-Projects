
let timerRef = document.querySelector(".innerContainer");
let [milliseconds,seconds,minutes] = [0,0,0];
let int = null;

function currentTime(){
    milliseconds+=1;
    if(milliseconds == 60){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
}
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds ;
timerRef.innerHTML = `${m} : ${s} : ${ms}`;     
}
document.getElementById("btn_start").addEventListener("click", ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(currentTime,1);
});
document.getElementById("btn_stop").addEventListener("click",function(){
    clearInterval(int);
})
document.getElementById("btn_reset").addEventListener("click",function(){
    clearInterval(int);
    [milliseconds,seconds,minutes] = [0,0,0];
    timerRef.innerHTML = "00 : 00 : 00 ";
})
