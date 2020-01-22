var score = 0;
var timer = 0;
var startBtn = document.getElementById("startQuiz");

var highScores = [
    {
        initials: "",
        finalScore: 0
    }
];

startBtn.addEventListener("click", function(){

    var jumbotron = document.getElementById("jumbotron");
    jumbotron.classList.add("d-none"); // hides the jumbotron

    var header = document.getElementById("quiz-header");
    header.classList.remove("d-none"); // shows the timer and high scores

    var questionsCounter = 0; // Initializes the counter to get the first question in the array
    var numberOfQuestions = questions.length;

    populateFirstQuestion();

});

var clicked = document.getElementById('answers');
clicked.addEventListener("click", function(event) {

    var CurrentIndex = document.getElementById("questionsBox").getAttribute("index");
    //console.log(CurrentIndex);
    var selectedAnswer = event.target.innerText;
    var correctAnswer = questions[CurrentIndex].answer;
    //console.log(correctAnswer);
    if(selectedAnswer == correctAnswer) {
        CurrentIndex++;
        generateQuestion(CurrentIndex);
        //alert("display next question");
    } else {
        alert("call penalties function");
    }
});

function generateQuestion(q) {

    var questionBox = document.getElementById("questionsBox");
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

}

function populateFirstQuestion() {
    var questionBox = document.getElementById("questionsBox");
    questionBox.classList.remove("d-none");
    questionBox.setAttribute("index", 0);

    var questionHeader = document.getElementById("questionTitle");
    questionHeader.innerText = questions[0].title;
    var currentQuestion = questions[0];
    var qNumber = document.getElementById("qNumber");
    qNumber.innerText = "Question "+(0+1);

    // the following loop displays the current question and answer list
    for (var i=0; i < questions[0].choices.length; i++) {
        var listItem = document.createElement('li');
        var answer = currentQuestion.choices[i];
        listItem.innerText = answer;
        listItem.setAttribute("id",i);
        document.getElementById("answers").appendChild(listItem);
    };
}

