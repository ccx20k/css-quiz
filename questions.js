var questions = [
    {
        title: "What does CSS stand for?",
        choices: ["Cascading Style Sheets","Computing Style Sheets","Creative Styles Services","Color Style Services"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Where in the html can you link to an external CSS file?",
        choices: ["In the body","In the head","In the footer","In the nav bar"],
        answer: "In the head"
    },
    {
        title: "Which HTML attribute is used to define inline CSS styles?",
        choices: ["class","href","style","format"],
        answer: "style"
    },
    {
        title: "Which property is used to change the font color?",
        choices: ["font-color","text-color","type","color"],
        answer: "color"
    },
    {
        title: "How to you select an element with id 'main'?",
        choices: ["main",".main","*main","#main"],
        answer: "#main"
    }
];

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

     // to hide the jumbotron

    var jumbotron = document.getElementById("jumbotron");
    jumbotron.classList.add("d-none");

    var questionBox = document.getElementById("questionsBox");
    questionBox.classList.remove("d-none");
    questionBox.setAttribute("index", "0");

    var header = document.getElementById("quiz-header");
    header.classList.remove("d-none");

    var questionsCounter = 0;

    questionsControl(questionsCounter);

});

function questionsControl(q) {

    var questionHeader = document.getElementById("questionTitle");
    questionHeader.innerText = questions[q].title;
    var currentQuestion = questions[q];
    var qNumber = document.getElementById("qNumber");
    qNumber.innerText = "Question "+(q+1);

    // the following loop displays the current question and answer list
    for (var i=0; i < questions[q].choices.length; i++) {
        var listItem = document.createElement('li');
        var answer = currentQuestion.choices[i];
        listItem.innerText = answer;
        listItem.setAttribute("id",i);
        document.getElementById("answers").appendChild(listItem);
    };

    //trying to set up the click event - TESTING THIS CURRENTLY
    var clicked = document.getElementById('0');

    clicked.addEventListener("click", function(event) {
        if(clicked) {
            alert("hello");
        }
    });

};

