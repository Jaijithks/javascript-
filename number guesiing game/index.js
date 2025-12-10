const min = 1;
const max = 50;
const answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 0;
let guess;

do{
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
        continue;
    }
    else if(guess < min || guess > max)
    {
       window.alert(`Please enter a number between the limit`)
       continue;
    }

    attempts++;

    if(guess < answer){
        window.alert(`Your guess is too low`);
    }
    else if(guess > answer){
        window.alert(`Your guess is too high`);
    }
    else{
        document.getElementById("myp").textContent =
        `THE number is ${answer} and you guessed it right in attempt no ${attempts}`;
    }

}while(guess !== answer);
