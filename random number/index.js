const myp = document.getElementById("myp")
const myp1 = document.getElementById("myp1")
const myp2 = document.getElementById("myp2")
const rand = document.getElementById("rand")
const min = 1;
const max = 6

rand.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    document.getElementById("myp").textContent = `${randomnum}`;
    document.getElementById("myp1").textContent = `${randomnum1}`;
    document.getElementById("myp2").textContent = `${randomnum2}`;
}