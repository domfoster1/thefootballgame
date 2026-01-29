const myQuestions = [
    {
        question: "How many players per team are on the field at one time?",
        answers: {
            a: "11",
            b: "22",
            c: "9",
            d: "15"
        },

        correctAnswer: "a"

    },

    {
        question: "Excluding the goalkeeper, what part of the body cannot touch the ball?",
        answers: {
            a: "Head",
            b: "Knee",
            c: "Arm/Hand",
            d: "Shoulder"
        },

        correctAnswer: "c"
    },

    {
        question: "What colour card means that a player has to leave the pitch for the rest of the game?",
        answers: {
            a: "Pink",
            b: "Red",
            c: "Yellow",
            d: "Blue"
        },

        correctAnswer: "b"

    },

    {
        question: "What is the longest running Football TV show called?",
        answers: {
            a: "Match of the Day",
            b: "This is football!",
            c: "Professional soccer TV",
            d: "Alan Partridge's Countdown to the World Cup"
        },

        correctAnswer: "a"
    },

    {
        question: "Who has the most international goals for the England national team",
        answers: {
            a: "Sir Bobby Charlton",
            b: "Wayne Rooney",
            c: "Emile Heskey",
            d: "Harry Kane"
        },

        correctAnswer: "d"
    },

    {
        question: "What happens if the ball hits the referee and the ball goes to the opposition?",
        answers: {
            a: "Penalty!",
            b: "Drop ball to the kicker",
            c: "Goal!",
            d: "Throw in to the kicker"
        },

        correctAnswer: "b"
    },

    {
        question: "What country has won the most amount of FIFA World Cups?",
        answers: {
            a: "Japan",
            b: "England",
            c: "Brazil",
            d: "Spain"
        },

        correctAnswer: "c"
    },

    {
        question: "What does VAR stand for?",
        answers: {
            a: "Very Accurate Reporting",
            b: "Video Assistant Referee",
            c: "Virtual Assistant Referee",
            d: "Very Attentive Referee"
        },

        correctAnswer: "b"
    },

    {
        question: "What area of the world are the teams that play in the UEFA Champions League from?",
        answers: {
            a: "Africa",
            b: "South America",
            c: "Asia",
            d: "Europe"
        },

        correctAnswer: "d"
    },

    {
        question: "What is a 'Transfer Window?'",
        answers: {
            a: "When teams are allowed to buy and sell players",
            b: "Something to look out of",
            c: "The time of year that people swap their windows",
            d: "What you open to let in the fresh air"
        },

        correctAnswer: "a"
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");
const submitButton = document.getElementById("submit")
const resultElement = document.getElementById("result")

let questionIndex = 0;
let score = 0;
let userAnswer = null;

//function to load questions and answers

function showQuestion() {
    let current = myQuestions[questionIndex];

    questionElement.textContent = current.question;

    let answers = Object.values(current.answers);
    let keys = Object.keys(current.answers);

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = answers[i];
        answerButtons[i].dataset.answer = keys[i];
        answerButtons[i].classList.remove("selected");

    }
    
    userAnswer = null;
}


// selected answer
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function () {
        for (let j = 0; j < answerButtons.length; j++) {
            answerButtons[j].classList.remove("selected");
        }
        this.classList.add("selected");
        userAnswer = this.dataset.answer;
    });
}

//submit answer
submitButton.addEventListener("click", function () {
    if (userAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    if(userAnswer === myQuestions[questionIndex].correctAnswer) {
        score ++;
    }

    questionIndex++;

    if (questionIndex < myQuestions.length) {
    showQuestion();
    } else {
        questionElement.textContent = "Quiz Finished!";
        resultElement.textContent = "Final score: " + score + " / " + myQuestions.length;
        submitButton.style.display = "none";

    }
});

showQuestion()

