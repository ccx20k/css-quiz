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

// EVENT LISTENERS
startBtn.addEventListener("click", function(){

    var jumbotron = document.getElementById("jumbotron");
    jumbotron.classList.add("d-none"); // hides the jumbotron

    var header = document.getElementById("quiz-header");
    header.classList.remove("d-none"); // shows the timer and high scores
    questionBox.classList.remove("d-none"); // shows the div containing the question
    
    var questionsCounter = 0; // Initializes the counter to get the first question in the array
    generateQuestion(questionsCounter); // displays the first question

    var timer = quizTimer(); //  initializes the countdown
    console.log(typeof timer);

});

var clicked = document.getElementById('answers');
clicked.addEventListener("click", function(event) {

    var CurrentIndex = document.getElementById("questionsBox").getAttribute("index");
    var numberOfQuestions = questions.length;
    var selectedAnswer = event.target.innerText;
    var correctAnswer = questions[CurrentIndex].answer;
    
    if(selectedAnswer == correctAnswer) { 
        score +=100;
        console.log(score);
        CurrentIndex++;
        
        if (CurrentIndex < numberOfQuestions) {
            correctAnswerAlert.classList.remove("d-none");
            setTimeout(function() { 
                correctAnswerAlert.classList.add("d-none");
                generateQuestion(CurrentIndex);
            }, 500);
            //generateQuestion(CurrentIndex);
        }
    
    } else {
        if (CurrentIndex == numberOfQuestions-1) {
            endQuiz();
        } else {
            wrongAnswerAlert.classList.remove("d-none");
            score -=10;
            console.log(score);
            CurrentIndex++;
            setTimeout(function() { 
                wrongAnswerAlert.classList.add("d-none");
                generateQuestion(CurrentIndex);
            }, 500);
            //generateQuestion(CurrentIndex);
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
    qNumber.innerText = "Question "+(q+1);

    // removes previusly appended li items
    var answers = document.getElementById("answers");
    while (answers.hasChildNodes()) {  
        answers.removeChild(answers.firstChild);
      }

    // the following loop displays the current question and answer list
    for (var i=0; i < questions[q].choices.length; i++) {
        var listItem = document.createElement('li');
        var answer = currentQuestion.choices[i];
        listItem.innerText = answer;
        listItem.setAttribute("id",i);
        document.getElementById("answers").appendChild(listItem);
    };

};
 
function quizTimer() {

    var quizRunTime = 90;
    var timerDisplay = document.getElementById("timer");

    var timerInterval = setInterval(function(){
        quizRunTime--;
        timerDisplay.textContent = quizRunTime;

        if(quizRunTime === 0) {
            clearInterval(timerInterval);
            endQuiz();
          } 
      
    }, 1000);

     return timerInterval;
};

function endQuiz() {
    var endingDiv = document.getElementById("endOfQuiz");
    var questionBox = document.getElementById("questionsBox");
    questionBox.classList.add("d-none");
    endingDiv.classList.remove("d-none"); 
}