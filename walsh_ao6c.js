/* Tyler Walsh
walsh_ao6c.js
19WI_INFO_2124_WW
Thoendel
1/25/2019 */

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */

while(lottoPicks.length < 5) { //If the lottoPicks array has less than 5 items in it, do this then check how many items it has inside.

    let randomNumber = getLottoNumber(); //Generate a random number with this method. These are the lotto numbers.

    lottoPicks.unshift(randomNumber); //Add that random number to the lottoPicks array.
}

for (var i = 0; i < lottoPicks.length; i++) { //For each item in the lottoPicks array, do this.
    switch(lottoPicks[i]) { //A switch statement is an easy way to basically make multiple similar "if, else" statements without cluttering the code too much.

        case 22:  //If the number matches any of the winning lottery numbers, add $10 to the prize pool.
            winnings = winnings + 10; 
        break; //The break statement means the expression checks for the next case. This means, if you somehow rolled a 22 and a 42 on the same number, you would get $20.

        case 42: //If the number matches any of the winning lottery numbers, add $10 to the prize pool.
        winnings = winnings + 10; 
        break; //The break statement means the expression checks for the next case.

        case 43: //If the number matches any of the winning lottery numbers, add $10 to the prize pool.
        winnings = winnings + 10; 
        break; //The break statement means the expression checks for the next case.

        case 47: //If the number matches any of the winning lottery numbers, add $10 to the prize pool.
        winnings = winnings + 10; 
        break;//The break statement means the expression checks for the next case.

        case 61: //If the number matches any of the winning lottery numbers, add $10 to the prize pool.
        winnings = winnings + 10; 
        break;//The break statement means the expression checks for the next case.

        case powerBallPick: //If the number matches the powerball number, add $100 to the prize pool.
        winnings = winnings + 100; 
        break; //The break statement means the expression checks for the next case. Since this is the last statement, ordinarily there would be a default case here. However, that would be redundant.
    }
}
    if(winnings !== 0) { //If the user won any money, tell them how much they won.
    console.log("Congratulations! You won $" + winnings + "!");
    } else { //If the user won no money, tell them they won no money.
        console.log("Sorry, you didn't win anything. Better luck next time!");
    }    

/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}