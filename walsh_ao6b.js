/* Tyler Walsh
walsh_ao6b.js
19WI_INFO_2124_WW
Thoendel
1/25/2019 */

const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const story = 
    `You're walking along Dodge Street minding your own business
and your suddenly run into the Wizard of Benson standing
in on the corner of 50th and Dodge.

Do you (C)ontinue walking? (S)top and ask for some magical help?
(T)rip and fall into a pot hole?
`;

clearScreen();
console.log(story);

standardInput.on('data', function(text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    /* WRITE YOUR SOLUTION BETWEEN THIS LINE */

    if(text == "c" || text == "C") { //If the user entered a 'c' do this.
        clearScreen(); //Calls a method to clear the screen of other text.

        console.log("You non-chalantly walk past the Wizard of Benson with the smug confidence of a person who don't need no stinkin' Wizard, lest a Wizard of Benson.");
        //outputs the text for the game.

        endGame(); //Calls a method to end the game.

    } else if(text == "s" || text == "S") { //If the first if statement is not true, check to see if this statement is true.
        clearScreen(); //Calls a method to clear the screen of other text.

        console.log("You walk up to the wizard, hands sweaty with anticipation. As you approach, you notice the Wizard is wearing a Hawkeyes hat. Your disappointment proves more powerful than your desire to engage a Wizard, and instead you turn left to buy a nice, warm Runza.");
        
        endGame(); //Calls a method to end the game.
    } else if(text == "t" || text == "T") { //Evaluates if the user entered a 't'. Only if they the did not enter an 'S' or a 'C'

        clearScreen(); //Calls a method to clear the screen of other text.

        console.log("You begin approaching the Wizard, hands sweaty with anticipation, mouth dry with general dehydration. As you take one step forward, you place your entire weight upon the forward leg, but your foot fails to make contact with solid ground. As the entirety of your uncontrolled body's weight continues forward and downward simultaneously, your mind begins considering what precisely the $50,000 increase in your home's assessment and matching tax increase is paying for.");
    
        endGame();// Calls a method to end the game.

    } else { //If the user did not enter a C, T, or S, do this.
        clearScreen(); //Calls a method to clear the screen of other text.

        console.log("The Wizard watches as you approach. Determining you're not cool enough to hang with him, the wizard smugly smiles and walks into a vape shop. You blew your chance.");
     
        endGame(); //calls a method to end the game.
    }
    /* AND THIS LINE */
});

function endGame() {
    console.log("Game Over\n\n\n");
    process.exit();
}

function clearScreen() {
    console.log('\033[2J');
}