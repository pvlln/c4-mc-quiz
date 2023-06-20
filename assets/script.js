// Select elements
var timeEl = document.querySelector("#timer");
var titleEl = document.querySelector(".title");
var content = document.querySelector(".content");
var content2 = document.querySelector(".content-2");
var content3 = document.querySelector(".content-3");
var startBtn = document.querySelector("#start");

// Create an array to store user initials and scores
var highScores = [];

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
    correct: "Parenthesis",
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
    correct: "All of the above",
  },
  {
    count: 4,
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correct: "Quotes",
  },
  {
    count: 5,
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
    correct: "Console.log",
  },
];

// Timer start
var timeLeft = 75;
var interval;
var currentQuestionIndex = 0;
var score = 0;

// Timer function
function startTimer() {
  interval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft == 0 || currentQuestionIndex == questionList.length) {
      clearInterval(interval);
      endQuiz();
    }
  }, 1000);
}

// Function to display the current question
function displayQuestion() {
  var currentQuestion = questionList[currentQuestionIndex];
  titleEl.textContent = currentQuestion.question;
  var questionEl = document.createElement("ul");

  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i];

    var buttonEl = document.createElement("button");
    buttonEl.classList.add("btn", "custom-btn");
    buttonEl.textContent = option;
    buttonEl.setAttribute("data-option", option);
    buttonEl.addEventListener("click", checkAnswer);

    var listItemEl = document.createElement("li");
    listItemEl.appendChild(buttonEl);
    questionEl.appendChild(listItemEl);
  }

  content.innerHTML = "";
  content.appendChild(questionEl);
  if (currentQuestionIndex == 0){
    content2.innerHTML = '<h3 class="text-muted"></h3>';
  }
}


// Function to check the selected answer
function checkAnswer(event) {
  var selectedOption = event.target.getAttribute("data-option");
  var currentQuestion = questionList[currentQuestionIndex];

  if (selectedOption === currentQuestion.correct) {
    score++;
    content2.innerHTML = '<h3 class="text-muted">Correct! </h3>';
  } else {
    timeLeft -= 10;
    content2.innerHTML = '<h3 class="text-muted">Incorrect answer:( </h3>';
  }

  currentQuestionIndex++;
  displayQuestion();
}

// Function to start the quiz
function startQuiz() {
  startTimer();
  displayQuestion();
}

// Function to end the quiz
function endQuiz() {
  clearInterval(interval);
  titleEl.innerHTML = "";
  content.innerHTML = "";
  content2.innerHTML = "";
  content3.innerHTML = "";

  var initials = prompt("Please enter your initials:");
  localStorage.setItem(initials, score.toString());

  titleEl.innerHTML = "<h2>The high scores for this quiz are as follows:</h2>";
  var highScoresHtml = "<ul>";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    highScoresHtml += `<li> ${key}: ${value} </li>`;
  }

  highScoresHtml += "</ul>";
  content.innerHTML = highScoresHtml;
  content2.innerHTML = '<h3 class="text-muted">Please refresh the page to take the quiz again!</h3>'
}


// Add event listeners
startBtn.addEventListener("click", startQuiz);

// I HAD TO REWRITE THE CODE IN ANOTHER FILE IN ORDER TO REFACTOR THE SUPER BUGGED CODE BELOW:
// // Select elements
// var timeEl = document.querySelector("#timer");
// var titleEl = document.querySelector(".title");
// var content = document.querySelector(".content");
// var content2 = document.querySelector(".content-2");
// var content3 = document.querySelector(".content-3");
// var startBtn = document.querySelector("#start");

// // Create an object for every question and the correct answer
// var questionList = [
//   {
//     count: 1,
//     question: "Commonly used data types DO NOT include:",
//     options: ["Strings", "Booleans", "Alerts", "Numbers"],
//     correct: "Alerts",
//   },
//   {
//     count: 2,
//     question:
//       "The condition in an if / else statement is enclosed within _____.",
//     options: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
//     answer: "Parenthesis",
//   },
//   {
//     count: 3,
//     question: "Arrays in JavaScript can be used to store _____.",
//     options: [
//       "Numbers and strings",
//       "Other arrays",
//       "Booleans",
//       "All of the above",
//     ],
//     answer: "All of the above",
//   },
//   {
//     count: 4,
//     question:
//       "String values must be enclosed within _____ when being assigned to variables.",
//     options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
//     answer: "Quotes",
//   },
//   {
//     count: 5,
//     question:
//       "A very useful tool used during development and debugging for printing content to the debugger is:",
//     options: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
//     answer: "Console.log",
//   },
// ];

// // Timer start
// var timeLeft = 75;
// var finishQuiz = false;

// // Timer function
// function setTimer() {
//   var timerInterval = setInterval(function () {
//     timeLeft--;
//     timeEl.textContent = timeLeft;
//     if (timeLeft === 0) {
//       clearInterval(timerInterval);
//       window.alert("Time is up!");
//       endQuiz();
//     }
//     if (finishQuiz){
//       clearInterval(timerInterval);
//     }
//   }, 1000);
// }

// // Question count and score
// var questionCount = 0;
// var score = 0;

// // Question right/wrong check
// var isCorrect = true;

// // Function to move on to next question if incorrect
// function nextQuestion() {
//   if (questionCount > 5) {
//     endQuiz();
//     finishQuiz = true;
//     return;
//   }
//   // Increase question count- bring in the object with the count of the question
//   var currentQ = questionList[questionCount];
//   // Make html element
//   var htmlEl = "<ul>";
//   // Iterate through object and create buttons list
//   for (let i = 0; i < currentQ.options.length; i++) {
//     // Create html element for correct answer
//     isCorrect = (currentQ.options[i] === currentQ.correct) ? true : false;
//     console.log(isCorrect); 
//     htmlEl += `
//         <li>
//             <button class="btn custom-btn" onclick=checkAnswer(${isCorrect})>${i+1}. ${currentQ.options[i]}</button>
//         </li>
//     `;
//   }
//   // Close out html unordered list
//   htmlEl += "</ul>";
//   // Console check
//   console.log(htmlEl);
//   // Print on page
//   titleEl.textContent = currentQ.question;
//   content.innerHTML = htmlEl;

//   questionCount++;
// }

// function checkAnswer(isCorrect){
//   // CHECK THIS ****
//   if (questionCount === 0){
//     content2.innerHTML = '<h3></h3>';
//   }
//  console.log(isCorrect);
//  nextQuestion();
//  if (isCorrect){
//    content2.innerHTML = '<h3 class="text-muted">Correct! </h3>';
//    score++;
//  } else {
//   timeLeft -=5;
//   setTimer();
//   content2.innerHTML = '<h3 class="text-muted">Incorrect answer:( </h3>';
//  }
// }

// // Function for first question initiation
// function startQuiz() {
//     setTimer();
//     nextQuestion();
// }

// // Function to end quiz and see results/highscore
// function endQuiz() {
//   var initials = prompt("Please enter your initials:");
//   localStorage.setItem(initials, score);
//   htmlScores = "<h2>The high scores for this quiz are as follows:</h2>";
//   content = htmlScores + "<ul>";
//   for (let i = 0; i < localStorage.length; i++){
//     const initials = localStorage.key(i);
//     const score = localStorage.value(i);
//     content += `<li> ${initials}: ${score} </li>`
//   };
//   content += "</ul>";
//   finishQuiz = true;
// }

// // Add event listeners
// startBtn.addEventListener("click", startQuiz);
