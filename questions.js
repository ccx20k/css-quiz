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

    questionsControl();

    /* for (var i=0; i<4; i++) {
        var answer = document.getElementById(i);
        answer[i].innerText = currentQuestion.choices[i];
    };
     

     //for (var i=0; i <questions.length; i++) {
         //console.log(questions[i]);
         //var currentQuestion = questions[i];
          
         for (var a=0; a < questions[a].choices.length; a++) {
            var currentAnswer = questions[a].choices[a];
            console.log(currentAnswer);
         } */
         
     //}
});



function questionsControl() {

    var questionsCounter = 0;

    var questionHeader = document.getElementById("questionTitle");
    questionHeader.innerText = questions[0].title;
    var currentQuestion = questions[0];
    var qNumber = document.getElementById("qNumber");
    qNumber.innerText = "Question 1";

    // the following loop displays the current question and answer list
    for (var i=0; i < questions[0].choices.length; i++) {
        var listItem = document.createElement('li');
        var answer = currentQuestion.choices[i];
        listItem.innerText = answer;
        listItem.setAttribute("id",i);
        document.getElementById("answers").appendChild(listItem);
    };

    //trying to set up the click event
    var clicked = document.getElementById('0');

    clicked.addEventListener("click", function(event) {
        if(clicked) {
            alert("hello");
        }
    });

};

