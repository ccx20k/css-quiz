var score = 0;
var timer = 0;
var startBtn = document.getElementById("startQuiz");

var highScores = [
    {
        initials: "",
        finalScore: 0
    }
];

var questionBox = document.getElementById("questionsBox");

startBtn.addEventListener("click", function(){

    setQuizTimer(); //  initializes the countdown

    var jumbotron = document.getElementById("jumbotron");
    jumbotron.classList.add("d-none"); // hides the jumbotron

    var header = document.getElementById("quiz-header");
    header.classList.remove("d-none"); // shows the timer and high scores

    questionBox.classList.remove("d-none"); // shows the div containing the question
    var questionsCounter = 0; // Initializes the counter to get the first question in the array
    var numberOfQuestions = questions.length;

    generateQuestion(questionsCounter); // displays the first question

});

var clicked = document.getElementById('answers');
clicked.addEventListener("click", function(event) {

    var CurrentIndex = document.getElementById("questionsBox").getAttribute("index");
    //console.log(CurrentIndex);
    var selectedAnswer = event.target.innerText;
    var correctAnswer = questions[CurrentIndex].answer;
    //console.log(correctAnswer);
    if(selectedAnswer == correctAnswer) {

        // TO DO - place an if statement here to check if the user is in the last question 
        score +=100;
        CurrentIndex++;
        console.log(score);
        generateQuestion(CurrentIndex);
        //alert("display next question");
    } else {
        alert("call penalties function");
    }
});

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
 
function setQuizTimer(){

    var quizRunTime = 90;
    var timerDisplay = document.getElementById("timer");

    var timerInterval = setInterval(function(){
        quizRunTime--;
        timerDisplay.textContent = quizRunTime;

        if(quizRunTime === 0) {
            clearInterval(timerInterval);
            alert("Time ran out!");
          }
      
    }, 1000);
};