const myinput = document.getElementById("myinput");
const fahrenhelt = document.getElementById("fahrenhelt");
const celsius = document.getElementById("celsius");
const submitbtn =  document.getElementById("submitbtn");
const  answer = document.getElementById("answer");
let temperature;
let convertedValue;
let selected;
submitbtn.onclick = function(){
    temperature = Number(myinput.value);
    if(isNaN(temperature))
    {
        window.alert(`enter a valid temperature`);
    }
    if(celsius.checked)
    {
        convertedValue = (temperature-32)*(5/9)
        selected =`celsius`;
    }
    else if(fahrenhelt.checked)
    {
        convertedValue = (temperature*1.8)+32;
        selected =`fahrenhelt`
    }
    else{
        answer.textContent = `select a coversion type`;
        return;
    }
  answer.textContent = `The temperature in ${selected} is ${convertedValue}`
}
 
