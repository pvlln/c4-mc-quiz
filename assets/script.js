// Select elements
var timeEl = document.querySelector("#timer");
var titleEl = document.querySelector(".title");
var content = document.querySelector(".content");
var content2 = document.querySelector(".content-2");
var content3 = document.querySelector(".content-3");
var startBtn = document.querySelector("#start");

// Create an object for every question and the correct answer
var questionList = [
  {
    count: 1,
    question: "Commonly used data types DO NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },

  {
    count: 2,
    question:
      "The condition in an if / else statement is enclosed within _____.",
    options: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    answer: "Parenthesis",
  },

  {
    count: 3,
    question: "Arrays in JavaScript can be used to store _____.",
    options: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },

  {
    count: 4,
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    answer: "Quotes",
  },

  {
    count: 5,
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
    answer: "Console.log",
  },
];

// Timer start
var timeLeft = 75;

// Timer function
function setTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      window.alert("Time is up!");
      document.reload();
    }
  }, 1000);
}

// Question count and score
var questionCount = 0;
var score = 0;
var highscoreList = new Object();

// Question right/wrong check
var correct = true;

// Function to move on to next question if incorrect
function nextQuestion() {
  // Increase question count- bring in the object with the count of the question
  var currentQ = questionList[questionCount];
  // Make html element
  var htmlEl = "<ul>";
  // Iterate through object and create buttons list
  for (let i = 0; i < currentQ.options.length; i++) {
    // Create html element for correct answer
    var isCorrect = (currentQ.options[i] === currentQ.correct);
    console.log(isCorrect); 
    htmlEl += `
        <li>
            <button class="btn custom-btn" onclick=checkAnswer(${isCorrect})>${i+1}.${currentQ.options[i]}</button>
        </li>
    `;
  }
  // Close out html unordered list
  htmlEl += "</ul>";
  // Console check
  console.log(htmlEl);
  // Print on page
  titleEl.textContent = currentQ.question;
  content.innerHTML = htmlEl;

  questionCount++;
  if (questionCount > 5) {
    endQuiz();
  }
}

function checkAnswer(isCorrect){
 console.log(isCorrect);
 nextQuestion();
 var correctCheck = isCorrect ? score++ : (timeLeft -= 5);
 if (correctCheck){
   content2.innerHTML = '<h3 class="text-muted">Correct! </h3>';
 } else {
  
 }
}

// Function for first question initiation
function startQuiz() {
    setTimer();
    nextQuestion();
}

// Function to end quiz and see results/highscore
function endQuiz() {
  var initials = prompt("Please enter your initials:");
  highscoreList[initials] = score;
  var newScore = localStorage.setItem(initials, score);
  htmlScores = "<h2>The high scores for this quiz are as follows:</h2>";
  content = htmlScores + "<ul>";
  Object.entries(localStorage).forEach(entry => {
    var [key,value] = entry;
    content += `<li> ${key}: ${value} </li>`
  })
  content += "</ul>";
  clearTimeout(timerInterval);
}

// Add event listeners
startBtn.addEventListener("click", startQuiz);
