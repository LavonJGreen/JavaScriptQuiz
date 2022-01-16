var question = document.querySelector('#question');
var question = Array.from(document.querySelector('#choice-text'));
var question = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');
var testTimer = document.querySelector('#testTimer')
let currentQuestion = ""
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let counter;


let questions = [
    {
        question: , 
        choice1: ,
        choice2: ,
        choice3: ,
        choice4: ,
        answer: ,
    },
    {
        question: , 
        choice1: ,
        choice2: ,
        choice3: ,
        choice4: ,
        answer: ,
    },
    {
        question: , 
        choice1: ,
        choice2: ,
        choice3: ,
        choice4: ,
        answer: ,
    },
    {
        question: , 
        choice1: ,
        choice2: ,
        choice3: ,
        choice4: ,
        answer: ,
    },
    {
        question: , 
        choice1: ,
        choice2: ,
        choice3: ,
        choice4: ,
        answer: ,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 5

startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter === MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) *  100}%`

    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
}









//function startTimer(time) {
  //  counter = setInterval(timer, 1000);
    //function timer(){
      //  testTimer.textContent = time;
        //time--;
        //if(acceptingAnswer = flase){
          //  time--10
        //}
    //}

}