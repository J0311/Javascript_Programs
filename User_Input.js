
// 2 methods to gather User Input with JavaScript

// WINDOW PROMPT METHOD:

let username = window.prompt("What's your name?");
console.log(username);

// HTML text box METHOD:

let username1;

// whenever button is clicked, what ever text that's within the text box 
// will be assigned to username

document.getElementById("myButton").onclick = function(){

    username1 = document.getElementById("myText").value;
    console.log(username1);

    
    document.getElementById("myLabel").innerHTML = "Hello " + username1;
}