const myp = document.getElementById("myp");
const lab = document.getElementById("lab");
const num = document.getElementById("num");
const roll = document.getElementById("roll");
const results = [];

roll.onclick = function(){
    let Noofdice = Number(num.value);
    const results = [];
    const images = [];
    for(let i=1;i<=Noofdice;i++){
            const value = (Math.floor(Math.random() * 6)+1 );
            results.push(value);
            images.push(`<img src="dice_images/${value}.png">`);
    }
     console.log(`${results}`);
    myp.innerHTML = images.join('');
}