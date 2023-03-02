// Select elements
var timeEl = document.querySelector('#timer');
var titleEl = document.querySelector('#title');
var content = document.querySelector('#content');
var content2 = document.querySelector('#content-2');
var content3 = document.querySelector('#content-3');
var startBtn = document.querySelector('#start');

// Create an object for every question and the correct answer
var question1 = {
    count: 1,
    question: "Commonly used data types DO NOT include:",
    option1: "Strings",
    option2: "Booleans",
    option3: "Alerts",
    option4: "Numbers",
    answer: "Alerts",
};
// Console check
console.log(question1.lenght);

var question2 = {
    count: 2,
    question: "The condition in an if / else statement is enclosed within _____.",
    option1: "Quotes",
    option2: "Curly brackets",
    option3: "Parenthesis",
    option4: "Square brackets",
    answer: "Parenthesis",
};

var question3 = {
    count: 3,
    question: "Arrays in JavaScript can be used to store _____.",
    option1: "Numbers and strings",
    option2: "Other arrays",
    option3: "Booleans",
    option4: "All of the above",
    answer: "All of the above",
};

var question4 = {
    count: 4,
    question: "String values must be enclosed within _____ when being assigned to variables.",
    option1: "Commas",
    option2: "Curly brackets",
    option3: "Quotes",
    option4: "Parentheses",
    answer: "Quotes",
};

var question5 = {
    count: 5,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    option1: "Javascript",
    option2: "Terminal/bash",
    option3: "For loops",
    option4: "Console.log",
    answer: "Console.log",
};

var questionList = [question1, question2, question3, question4, question5];

// Timer start
var timeLeft = 75;

// Timer function
function setTimer(){
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            window.alert("Time is up!");
            document.reload();
        }
    }, 7500);
}

// Question count and score
var questionCount = 0;
var score = 0;
var highscoreList = new Object();

// Question right/wrong check
var correct = true;

// Function to move on to next question if incorrect
function nextQuestion(){
    // Increase question count- bring in the object with the count of the question
    questionCount++;
    if (questionCount > 4){
        endQuiz();
    }
    var currentQ;
    for (let i = 0; i < questionList.length; i++){
        if (questionList[i][0] == questionCount){
            currentQ = questionList[i];
        }
    }
    // Make html element
    var htmlEl = "<ul>";
    // Iterate through object and create buttons list
    for(let i=2; i < (currentQ.length - 1); i++){
        // Create html element for correct answer
        if (currentQ[i] == currentQ[5]){
            htmlEl += ('<li><button class="btn correct custom-btn">' + i + ". " + currentQ[i] + '</button></li>');
        // Create html element for incorrect answer 
        } else {
            htmlEl += ('<li><button class="btn incorrect custom-btn">' + i + ". " + currentQ[i] + '</button></li>'); 
        }
    }
    // Close out html unordered list
    htmlEl += "</ul>"
    // Console check
    console.log(htmlEl);
    // Print on page
    titleEl.textContent(currentQ[1]);
    content.innerHTML(htmlEl);
    // Add event listeners to correct and incorrect answers, delegate to other functions
    var correctAnswer = document.querySelector('#correct');
    var incorrectAnswer = document.querySelector('#incorrect');
    correctAnswer.addEventListener('click', function(){
        correct = true;
        nextQuestion();
        content2.textContent("Correct!");
    });
    correctAnswer.addEventListener('click', function(){
        correct = false;
        nextQuestion();
        content2.textContent("Incorrect!");
    });
}

// Function for first question initiation
function startQuiz(obj){
    // Check event listener
    console.log("makeList function: initiated");
    // Initialize timer
    setTimer();
    // Create list
    var htmlEl = "<ul>";
    // Iterate through object and create buttons list
    for(let i=2; i < (obj.length - 1); i++){
        // Create html element for correct answer
        if (obj[i] == obj[5]){
            htmlEl += ('<li><button class="btn correct custom-btn">' + i + ". " + obj[i] + '</button></li>');
        // Create html element for incorrect answer 
        } else {
            htmlEl += ('<li><button class="btn incorrect custom-btn">' + i + ". " + obj[i] + '</button></li>'); 
        }
    }
    // Close out html unordered list
    htmlEl += "</ul>"
    // Console check
    console.log(htmlEl);
    // Print on page
    titleEl.textContent(obj[1]);
    content.innerHTML(htmlEl);
    // Add event listeners to correct and incorrect answers, delegate to other functions
    var correctAnswer = document.querySelector('#correct');
    var incorrectAnswer = document.querySelector('#incorrect');
    correctAnswer.addEventListener('click', function(){
        correct = true;
        score ++;
        nextQuestion();
    });
    correctAnswer.addEventListener('click', function(){
        correct = false;
        timeLeft -= 10;
        nextQuestion();
        content2.textContent("Incorrect!");
    });
}

// Function to end quiz and see results/highscore
function endQuiz(){
    var initials = prompt("Please enter your initials:");
    highscoreList[initials] = score;
    var newScore = localStorage.setItem(initials, score);
    htmlScores = "<h2>The high scores for this quiz are as follows:</h2>" ;
    content = htmlScores + "<ul>"
    for (let i = 0; i < localStorage.length; i++){
        content += "<li>" + localStorage.getItem(localStorage.key(i)) + "</li>";
    }
    content += "</ul>"
    timeLeft = 0;
}

// Add event listeners 
startBtn.addEventListener('click', startQuiz(questionList[0]));