// let h = document.getElementById('hour');
// let m  = document.getElementById('minute');
// let s  = document.getElementById('second');
setInterval(()=>{
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hour_h_r = 30*hr + min/2;
    min_h_r = 6*min;
    sec_h_r = 6*sec;
    hour.style.transform = `rotate(${hour_h_r}deg)`;
    minute.style.transform = `rotate(${min_h_r}deg)`;
    second.style.transform = `rotate(${sec_h_r}deg)`;
},1000);