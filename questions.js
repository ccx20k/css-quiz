var questions = [
    {
        title: "Test question 1",
        choices: ["item1","item2","item3","item4"],
        answer: "item2"
    },
    {
        title: "Test question 2",
        choices: ["item1","item2","item3","item4"],
        answer: "item2"
    },
    {
        title: "Test question 3",
        choices: ["item1","item2","item3","item4"],
        answer: "item2"
    },
    {
        title: "Test question 3",
        choices: ["item1","item2","item3","item4"],
        answer: "item2"
    },
    {
        title: "Test question 4",
        choices: ["item1","item2","item3","item4"],
        answer: "item2"
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

    var questionsLenght = questions.length;
    
    console.log(questionsLenght);
    
    var questionHeader = document.getElementById("questionTitle");
    questionHeader.innerText = questions[0].title;

    for (var i=0; i<4; i++) {
        var answer = document.getElementById(i);
        answer.innerText = questions[i].choices[i];
    };
    
});

