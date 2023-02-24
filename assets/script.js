// Select elements
var timeEl = $('#timer');
var titleEl = $('#title');
var content = $('#content');
var content2 = $('#content-2');
var content3 = $('#content-3');

// Create an object for every question and the correct answer
var question1 = {
    question: "Commonly used data types DO NOT include:",
    option1: "Strings",
    option2: "Booleans",
    option3: "Alerts",
    option4: "Numbers",
};
//CONSOLE CHECK: DELETE THIS
console.log(question1.lenght);

var question1Answer = "Alerts";

var question2 = {
    question: "The condition in an if / else statement is enclosed within _____.",
    option1: "Quotes",
    option2: "Curly brackets",
    option3: "Parenthesis",
    option4: "Square brackets",
};

var question2Answer = "Parenthesis";

var question3 = {
    question: "Arrays in JavaScript can be used to store _____.",
    option1: "Numbers and strings",
    option2: "Other arrays",
    option3: "Booleans",
    option4: "All of the above",
};

var question3Answer = "All of the above";

var question4 = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    option1: "Commas",
    option2: "Curly brackets",
    option3: "Quotes",
    option4: "Parentheses",
};

var question4Answer = "Quotes";

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    option1: "Javascript",
    option2: "Terminal/bash",
    option3: "For loops",
    option4: "Console.log",
};

var question5Answer = "Console.log";

// Function to turn questions into html unordered lists with button items, and add them to the html doc elements
function makeList(obj){
    var htmlEl = "<ul>";
    for(let i=1; i < obj.length; i++){
        htmlEl += '<button class="btn custom-btn">' + i + ". " + obj[i] + '</button>';
    }
    htmlEl += "</ul>"
    titleEl.text(obj[0]);
    content.text(htmlEl);
};

// Timer start
var timeleft = 75;

// Timer function
function setTimer(){

}

// Answer checker/next question/answer consequence function
function submitAns(){

}


// Add event listeners 