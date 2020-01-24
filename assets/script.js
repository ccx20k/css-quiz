// GLOBAL VARIABLES
var score = 0;
var startBtn = document.getElementById("startQuiz");
var highScores = [
  {
    initials: "",
    finalScore: 0
  }
];
var questionBox = document.getElementById("questionsBox");
var correctAnswerAlert = document.querySelector(".alert-success");
var wrongAnswerAlert = document.querySelector(".alert-danger");
var quizRunTime = 30;
var numberOfQuestions = questions.length;
var timerInterval;

// EVENT LISTENERS
startBtn.addEventListener("click", function() {
  var jumbotron = document.getElementById("jumbotron");
  jumbotron.classList.add("d-none"); // hides the jumbotron

  var header = document.getElementById("quiz-header");
  header.classList.remove("d-none"); // shows the timer and high scores
  questionBox.classList.remove("d-none"); // shows the div containing the question

  var questionsCounter = 0; // Initializes the counter to get the first question in the array
  generateQuestion(questionsCounter); // displays the first question

  quizTimer(quizRunTime); //  initializes the countdown
});

var clicked = document.getElementById("answers");
clicked.addEventListener("click", function(event) {
  var CurrentIndex = document
    .getElementById("questionsBox")
    .getAttribute("index");
  var selectedAnswer = event.target.innerText;
  var correctAnswer = questions[CurrentIndex].answer;

  var isClicked = event.returnValue;// testing
  console.log(isClicked);// testing

  if (selectedAnswer == correctAnswer) {
    score += 100;
    console.log(score);
    CurrentIndex++;
    correctAnswerAlert.classList.remove("d-none");
    if (CurrentIndex < numberOfQuestions) {
      setTimeout(function() {
        correctAnswerAlert.classList.add("d-none");
        generateQuestion(CurrentIndex);
      }, 500);
    } else {
      setTimeout(function() {
        correctAnswerAlert.classList.add("d-none");
        endQuiz(timerInterval); // testing
      }, 500);
    }
  } else {
    wrongAnswerAlert.classList.remove("d-none");
    score -= 10;
    CurrentIndex++;
    if (CurrentIndex < numberOfQuestions) {
      setTimeout(function() {
        wrongAnswerAlert.classList.add("d-none");
        generateQuestion(CurrentIndex);
      }, 500);
    } else {
      setTimeout(function() {
        wrongAnswerAlert.classList.add("d-none");
        endQuiz(timerInterval); // testing
      }, 500);
    }
  }
});

// FUNCTIONS
function generateQuestion(q) {
  questionBox.setAttribute("index", q);

  var questionHeader = document.getElementById("questionTitle");
  questionHeader.innerText = questions[q].title;
  var currentQuestion = questions[q];
  var qNumber = document.getElementById("qNumber");
  qNumber.innerText = "Question " + (q + 1);

  // removes previusly appended li items
  var answers = document.getElementById("answers");
  while (answers.hasChildNodes()) {
    answers.removeChild(answers.firstChild);
  }

  // the following loop displays the current question and answer list
  for (var i = 0; i < questions[q].choices.length; i++) {
    var listItem = document.createElement("li");
    var answer = currentQuestion.choices[i];
    listItem.innerText = answer;
    listItem.setAttribute("id", i);
    document.getElementById("answers").appendChild(listItem);
  }
}

function quizTimer(r) {// testing
  /* var clickedObject = document.getElementById("answers");
  var Clicked = clickedObject.addEventListener("click", function(){
    var captureClick = event.returnValue;
    captureClick.toString();
    return captureClick;
  });
  console.log(Clicked); */
  var timerDisplay = document.getElementById("timer");
  //var CurrentIndex = document.getElementById("questionsBox").getAttribute("index");
  var timerInterval = setInterval(function() {
    r--;
    timerDisplay.textContent = r;
    var CurrentIndex = document
      .getElementById("questionsBox")
      .getAttribute("index");
    console.log(CurrentIndex);
    var clickedObject = document.getElementById("answers");
  var Clicked = clickedObject.addEventListener("click", function(){
    var captureClick = event.returnValue;
    captureClick.toString();
    return captureClick;
  });
  console.log(Clicked);
    //console.log("this is c "+c);
    if (CurrentIndex == numberOfQuestions-1) { // testing
      endQuiz(timerInterval);
    };
    if (r === 0) {
      // add something here to allow the user to pick the final answer
      //clearInterval(timerInterval);
      endQuiz(timerInterval);
    }
  }, 1000);
}

function endQuiz(t) {
  var endingDiv = document.getElementById("endOfQuiz");
  var questionBox = document.getElementById("questionsBox");
  questionBox.classList.add("d-none");
  endingDiv.classList.remove("d-none");
  var finalScore = document.getElementById("finalScore");
  finalScore.innerText = score;
  clearInterval(t);
}
