//this function accessess the element with id of "today" in my html and changes it to the current date 
function displayDate(){
    document.getElementById("today").innerHTML = Date();
}

//This allows the user to type in their name
let name = prompt("What is your name?") //Prompt opens up a pop up with an input box
document.getElementById('name').innerHTML = "Hello " + name // Prints name on page
console.log('Hello ' + name) //Prints name in console

let words = ["abstraction", "decomposition", "pattern recognition", "algorithms","debugging"] //This is an array of possible words
let wordIndex = Math.floor(Math.random()* words.length) //chooses a random index between 0 and words length
let randomWord = words[wordIndex] //choses a random word from list 
let answer = []; //create an empty list for your answer array

//Fill answer array with emptt spaces that are equal to  the amount of letters in the random word array
for(var i= 0; i < randomWord.length; i++){
    answer[i] = "_";
}

let letters = randomWord.length; //This variable will keep track of how many letters are left
let guesses = []; // Set up an empty array for guesses
let wrong = 0;
let chances = 6;
let nope=0;



    

//Game Play
     
   //Display this information in the HTML Page
document.getElementById('randomWord').innerHTML = answer.join(" ") // Displays the empty dashes and answers
document.getElementById('wrong').innerHTML = "Letters Used: " + guesses // Prints name on page\
document.getElementById('guesses').innerHTML = "Wrong Guesses Left: " + (6 -wrong) // Prints guesses so far



function makeGuess(){
   let guess = prompt("Guess a letter!") ////allows person to guess a letter and saves it into guess variable 

//set up an alert for conditions with more than one letter
if (guess == null){
    return;// stops the loop if there is no guess 
} else if (guess.length != 1){
    alert("OOPS!! Only one letter at a time!")//if they guess more than one letter its invalid
} else{
    nope = 0;
    //look through each index of randomWord
    for(var j = 0; j < randomWord.length; j++ ){
        if(randomWord[j] == guess){//if the guess letter is equal to the letter in randomWord[j]
            answer[j] = guess;//replace the underscore in the same index with the letter guessed in the answer array
            guesses = guesses + guess // add the guess that you made to the guesses array so you wont guess the same again
            letters-- //subtract from the amount of letters you have left
           
        }else{
            nope++;// if the index is not a match add to nope
            if (nope == randomWord.length){//if we have gone the length of randomWord and still no match
             guesses = guesses + guess // add the guess that you made to the guesses array so you wont guess the same again
             wrong ++;
             if(wrong == 6){//if you guess wrong 6 times u get game over
                 //gameOver()
             }
        }
    }
    }
     

    if(letters > 0){ //while the length of the random word array is greater than zero
   //Display this information in the HTML Page
document.getElementById('randomWord').innerHTML = answer.join(" ") // Displays the empty dashes and answers
document.getElementById('wrong').innerHTML = "Letters Used: " + guesses // Prints name on page\
document.getElementById('guesses').innerHTML = "Wrong Guesses Left: " + (6 -wrong) // Prints guesses so far
} else if(letters ==0){//check if letters have run out, if it has you won
               win();
               
            }
}
}

//win and start over
function win(){
    alert("You Win. Click ok to start over")
    
    name = prompt("What is your name?") //Prompt opens up a pop up with an input box
document.getElementById('name').innerHTML = "Hello " + name // Prints name on page
console.log('Hello ' + name) //Prints name in console

words = ["abstraction", "decomposition", "pattern recognition", "algorithms","debugging"] //This is an array of possible words
wordIndex = Math.floor(Math.random()* words.length) //chooses a random index between 0 and words length
randomWord = words[wordIndex] //choses a random word from list 
answer = []; //create an empty list for your answer array

//Fill answer array with emptt spaces that are equal to  the amount of letters in the random word array
for(var i= 0; i < randomWord.length; i++){
    answer[i] = "_";
}

letters = randomWord.length; //This variable will keep track of how many letters are left
guesses = []; // Set up an empty array for guesses
wrong = 0;
chances = 6;
nope=0;

}



