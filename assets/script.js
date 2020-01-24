// GLOBAL VARIABLES
var score = 0;
var startBtn = document.getElementById("startQuiz");
var questionBox = document.getElementById("questionsBox");
var correctAnswerAlert = document.querySelector(".alert-success");
var wrongAnswerAlert = document.querySelector(".alert-danger");
var quizRunTime = 90;
var numberOfQuestions = questions.length;
var timerInterval;
var clicked = document.getElementById("answers");
var isClicked = "";
var timerDisplay = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");
/* var highScores = [
    {
      initials: "",
      finalScore: 0
    }
  ]; */

// START BUTTON EVENT LISTENER
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

// ANSWER CLICKED EVENT LISTENER
clicked.addEventListener("click", function(event) {

  var CurrentIndex = document.getElementById("questionsBox").getAttribute("index");
  var selectedAnswer = event.target.innerText;
  var correctAnswer = questions[CurrentIndex].answer;
  isClicked = "true";

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
        endQuiz(timerInterval); 
      }, 500);
    }
  } else {
    console.log(score);
    wrongAnswerAlert.classList.remove("d-none");
    score -= 10; // this deducts points from total score if the answer is wrong
    CurrentIndex++;
    if (CurrentIndex < numberOfQuestions) {
      setTimeout(function() {
        wrongAnswerAlert.classList.add("d-none");
        generateQuestion(CurrentIndex);
      }, 500);
    } else {
      setTimeout(function() {
        wrongAnswerAlert.classList.add("d-none");
        endQuiz(timerInterval); 
      }, 500);
    }
  }
});

// POPULATE QUESTIONS
function generateQuestion(q) {

    isClicked = "false";
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
};

// TIMER FUNCTION
function quizTimer(r) {
  
  var timerInterval = setInterval(function() {
    r--;
    timerDisplay.textContent = r;
    var CurrentIndex = document
      .getElementById("questionsBox")
      .getAttribute("index");
    if (CurrentIndex == numberOfQuestions-1 && isClicked == "true") { 
        clearInterval(timerInterval);
    };
    if (r === 0) {
      endQuiz(timerInterval);
    }
  }, 1000);
};

// DISPLAY FINAL SCREEN 
function endQuiz(t) {

  var endingDiv = document.getElementById("endOfQuiz");
  var questionBox = document.getElementById("questionsBox");
  questionBox.classList.add("d-none");
  endingDiv.classList.remove("d-none");
  
  clearInterval(t);
  setFinalScore();
  leaderBoard();
};

// CALCULATE FINAL SCORE 
function setFinalScore() {

    var secondsRemaining = timerDisplay.textContent;
    
    if (score < 0) { // user gets bonus points based on how fast the quiz was answered, and if at least one choice was right
        score = 0;
    } else {
        if (secondsRemaining > 60) {
            score += 50;
        } else if (secondsRemaining > 40) {
            score += 30;
        } else if (secondsRemaining > 20) {
            score += 10;
        } else {
            score += 5;
        }
    };
    
    finalScore.innerText = score;
    return score;
};

function leaderBoard() {
    
   // var playerInitials = document.getElementById("playerInitials").value.toUpperCase();
   // var totalPoints = finalScore.innerText;
    //var storedInitials = document.getElementById("storedInitials");
    //var storedScore = document.getElementById("storedScore");
    var storeBtn = document.getElementById("submitInitials");

    /* var highScores = [
        {
          playerInitials: playerInitials,
          finalScore: totalPoints
        }
    ]; */

    storeBtn.addEventListener("click", function() {

        alert("clicked");

        var playerInitials = document.getElementById("playerInitials").value.toUpperCase();
        var totalPoints = finalScore.innerText;
        var storedInitials = document.getElementById("storedInitials");
        var storedScore = document.getElementById("storedScore");

        var highScores = [
            {
              playerInitials: playerInitials,
              finalScore: totalPoints
            }
        ];

        storedInitials.innerText = highScores[0].playerInitials;
        storedScore.innerText = highScores[0].finalScore;

        localStorage.setItem("score", JSON.stringify(highScores));

        /* var dataStored = JSON.parse(localStorage.getItem("score"));
        console.log(dataStored[0].playerInitials);
        console.log(dataStored[0].finalScore); */

    });

    var dataStored = JSON.parse(localStorage.getItem("score"));
    console.log(dataStored[0].playerInitials);
    console.log(dataStored[0].finalScore);

   /*  if (storedInitials.innerText != "") {
        storedInitials.innerText = highScores[0].playerInitials;
        storedScore.innerText = highScores[0].finalScore;
    } */

    //storedInitials.innerText = highScores[0].playerInitials;
    //storedScore.innerText = highScores[0].finalScore;

    

    /* if (dataStored) {
        storedInitials.innerText = dataStored[0].playerInitials;
        storedScore.innerText = dataStored[0].finalScore;
    } */

    //storedInitials.innerText = highScores[0].playerInitials;
    //storedScore.innerText = highScores[0].finalScore;

    //var dataStored = JSON.parse(localStorage.getItem("score"));
    //console.log(dataStored);

    //localStorage.setItem("score", JSON.stringify(highScores));

    //console.log(totalPoints);
    //console.log(playerInitials);
};
