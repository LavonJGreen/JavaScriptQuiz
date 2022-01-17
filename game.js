const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const testTimer = document.querySelector('#testTimer')
let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let timeLeft = 40;
let timerInterval;


let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<Script>",
        choice3: "<javascript>",
        choice4: "<scripting>",
        answer: 1,
    },
    {
        question: "When is localStorage data cleared?",
        choice1: "On page reload",
        choice2: "On computer restart",
        choice3: "On browser close",
        choice4: "No experiation time",
        answer: 4,
    },
    {
        question: "what html attribute refrences an external JavaScript file?",
        choice1: "href",
        choice2: "src",
        choice3: "class",
        choice4: "index",
        answer: 2,
    },
    {
        question: "What does DOM stand for?",
        choice1: "Document Oriented Model",
        choice2: "Document Object Mode",
        choice3: "Document Object Model",
        choice4: "Document Object Managment ",
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

    timerInterval = setInterval(function () {
        timeLeft--;
        testTimer.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
}
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswer = true
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswer) return
        acceptingAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
            'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()






//function startTimer(time) {
  //  counter = setInterval(timer, 1000);
    //function timer(){
      //  testTimer.textContent = time;
        //time--;
        //if(acceptingAnswer = flase){
          //  time--10
        //}
    //}

//}