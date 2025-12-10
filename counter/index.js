const inc = document.getElementById("inc");
const res = document.getElementById("res");
const dec = document.getElementById("dec");
const count = document.getElementById("count");

let countn = 0;

inc.onclick = function(){
    countn++;
    count.textContent = countn;
}
dec.onclick = function(){
    countn--;
    count.textContent = countn;
}
res.onclick = function(){
    countn=0;
    count.textContent = countn;
}