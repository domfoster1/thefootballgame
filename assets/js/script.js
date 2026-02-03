// Quiz questions array
const myQuestions = [
  { question: "Which country won the 2018 FIFA World Cup?", answers: { a: "Brazil", b: "Germany", c: "France", d: "Argentina" }, correctAnswer: "c" },
  { question: "How many players are on a football team on the field at one time?", answers: { a: "9", b: "10", c: "11", d: "12" }, correctAnswer: "c" },
  { question: "Which player has won the most Ballon d'Or awards?", answers: { a: "Cristiano Ronaldo", b: "Lionel Messi", c: "Zinedine Zidane", d: "Ronaldinho" }, correctAnswer: "b" },
  { question: "What is the maximum number of substitutions allowed in a standard league match?", answers: { a: "3", b: "4", c: "5", d: "6" }, correctAnswer: "c" },
  { question: "Which club is known as 'The Red Devils'?", answers: { a: "Liverpool", b: "AC Milan", c: "Manchester United", d: "Bayern Munich" }, correctAnswer: "c" },
  { question: "How long is a standard football match (excluding added time)?", answers: { a: "80 minutes", b: "90 minutes", c: "100 minutes", d: "60 minutes" }, correctAnswer: "b" },
  { question: "Which country hosted the 2022 FIFA World Cup?", answers: { a: "Russia", b: "USA", c: "Qatar", d: "Japan" }, correctAnswer: "c" },
  { question: "Which footballer is known as 'CR7'?", answers: { a: "Cristiano Ronaldo", b: "C. Ramos", c: "Cesc Fabregas", d: "Carlos Tevez" }, correctAnswer: "a" },
  { question: "What does VAR stand for in football?", answers: { a: "Video Assistant Referee", b: "Virtual Automatic Replay", c: "Video Allowed Review", d: "Verified Action Replay" }, correctAnswer: "a" },
  { question: "Which club has won the most UEFA Champions League titles?", answers: { a: "AC Milan", b: "Liverpool", c: "Real Madrid", d: "Barcelona" }, correctAnswer: "c" },
  { question: "Who scored the 'Hand of God' goal?", answers: { a: "Pelé", b: "Diego Maradona", c: "Lionel Messi", d: "Cristiano Ronaldo" }, correctAnswer: "b" },
  { question: "How many points are awarded for a win in most football leagues?", answers: { a: "2", b: "3", c: "1", d: "4" }, correctAnswer: "b" },
  { question: "Which country won the first FIFA World Cup in 1930?", answers: { a: "Uruguay", b: "Italy", c: "Brazil", d: "Argentina" }, correctAnswer: "a" },
  { question: "What happens if a knockout match is tied after extra time?", answers: { a: "Replay", b: "Golden goal", c: "Penalty shootout", d: "Coin toss" }, correctAnswer: "c" },
  { question: "Which country has won the most FIFA World Cups?", answers: { a: "Germany", b: "Italy", c: "Brazil", d: "Argentina" }, correctAnswer: "c" },
  { question: "Who is the Premier League’s all-time top scorer?", answers: { a: "Wayne Rooney", b: "Alan Shearer", c: "Thierry Henry", d: "Sergio Agüero" }, correctAnswer: "b" },
  { question: "Which football club plays home games at Camp Nou?", answers: { a: "Real Madrid", b: "Barcelona", c: "Atletico Madrid", d: "Valencia" }, correctAnswer: "b" },
  { question: "Which country won Euro 2020?", answers: { a: "Italy", b: "England", c: "Spain", d: "France" }, correctAnswer: "a" },
  { question: "Who scored the fastest goal in World Cup history?", answers: { a: "Hakan Şükür", b: "Pele", c: "Lionel Messi", d: "Cristiano Ronaldo" }, correctAnswer: "a" },
  { question: "Which national team is nicknamed 'The Three Lions'?", answers: { a: "Germany", b: "England", c: "France", d: "Italy" }, correctAnswer: "b" },
  { question: "Which player is known as 'The Egyptian King'?", answers: { a: "Mohamed Salah", b: "Ahmed Hegazi", c: "Mohamed Elneny", d: "Trezeguet" }, correctAnswer: "a" },
  { question: "Which Italian club is nicknamed 'Rossoneri'?", answers: { a: "Juventus", b: "AC Milan", c: "Inter Milan", d: "Napoli" }, correctAnswer: "b" },
  { question: "Which goalkeeper has the most clean sheets in Premier League history?", answers: { a: "David de Gea", b: "Petr Čech", c: "Ederson", d: "Alisson" }, correctAnswer: "b" },
  { question: "Who won the 2021 Ballon d'Or?", answers: { a: "Cristiano Ronaldo", b: "Lionel Messi", c: "Robert Lewandowski", d: "Neymar" }, correctAnswer: "b" },
  { question: "Which team won the first UEFA Champions League in 1955?", answers: { a: "Real Madrid", b: "AC Milan", c: "Barcelona", d: "Benfica" }, correctAnswer: "a" },
  { question: "What is the offside rule in football?", answers: { a: "Player cannot be ahead of last defender when receiving the ball", b: "Player cannot touch the ball in the box", c: "Player cannot score from outside penalty area", d: "Player cannot tackle in opponent's half" }, correctAnswer: "a" },
  { question: "Which country won the 2014 FIFA World Cup?", answers: { a: "Brazil", b: "Germany", c: "Argentina", d: "Spain" }, correctAnswer: "b" },
  { question: "Which club is nicknamed 'The Gunners'?", answers: { a: "Chelsea", b: "Arsenal", c: "Liverpool", d: "Tottenham" }, correctAnswer: "b" },
  { question: "Which country is hosting the 2026 FIFA World Cup?", answers: { a: "Canada/Mexico/USA", b: "Qatar", c: "Brazil", d: "Germany" }, correctAnswer: "a" },
  { question: "Which team has won the most English Premier League titles?", answers: { a: "Manchester City", b: "Liverpool", c: "Manchester United", d: "Chelsea" }, correctAnswer: "c" },
  { question: "Which player is known as 'La Pulga'?", answers: { a: "Lionel Messi", b: "Luis Suárez", c: "Neymar", d: "Kylian Mbappé" }, correctAnswer: "a" },
  { question: "Which national team won the Copa America 2021?", answers: { a: "Argentina", b: "Brazil", c: "Uruguay", d: "Chile" }, correctAnswer: "a" },
  { question: "Which club plays home games at Old Trafford?", answers: { a: "Manchester City", b: "Manchester United", c: "Liverpool", d: "Tottenham Hotspur" }, correctAnswer: "b" },
  { question: "Which competition is known as 'The FA Cup'?", answers: { a: "English League Cup", b: "UEFA Cup", c: "The Football Association Challenge Cup", d: "Premier League" }, correctAnswer: "c" },
  { question: "Which player scored the winning goal in the 2010 FIFA World Cup Final?", answers: { a: "Andrés Iniesta", b: "Diego Forlán", c: "David Villa", d: "Thomas Müller" }, correctAnswer: "a" },
  { question: "Which country won the UEFA Euro 2016?", answers: { a: "France", b: "Portugal", c: "Germany", d: "Italy" }, correctAnswer: "b" },
  { question: "What is a 'hat-trick' in football?", answers: { a: "Scoring three goals in a match", b: "Three assists in a match", c: "Three yellow cards", d: "Three consecutive wins" }, correctAnswer: "a" },
  { question: "Which club is nicknamed 'The Blues' in England?", answers: { a: "Chelsea", b: "Manchester City", c: "Liverpool", d: "Everton" }, correctAnswer: "a" },
  { question: "Which player has scored the most goals in FIFA World Cup history?", answers: { a: "Miroslav Klose", b: "Ronaldo Nazário", c: "Pele", d: "Lionel Messi" }, correctAnswer: "a" },
  { question: "Which football competition is played every four years internationally?", answers: { a: "FIFA World Cup", b: "UEFA Champions League", c: "Premier League", d: "Copa Libertadores" }, correctAnswer: "a" },
  { question: "Which country won the UEFA Nations League 2019?", answers: { a: "Portugal", b: "France", c: "Netherlands", d: "Spain" }, correctAnswer: "a" },
  { question: "Which club plays at the Santiago Bernabéu Stadium?", answers: { a: "Real Madrid", b: "Barcelona", c: "Atlético Madrid", d: "Sevilla" }, correctAnswer: "a" },
  { question: "Who won the Golden Boot at the 2018 FIFA World Cup?", answers: { a: "Harry Kane", b: "Kylian Mbappé", c: "Lionel Messi", d: "Cristiano Ronaldo" }, correctAnswer: "a" },
  { question: "Which competition is held annually for top European clubs?", answers: { a: "UEFA Champions League", b: "Premier League", c: "FIFA Club World Cup", d: "UEFA Europa League" }, correctAnswer: "a" },
  { question: "Which player is known for the nickname 'The Egyptian King'?", answers: { a: "Mohamed Salah", b: "Ahmed Hegazi", c: "Mohamed Elneny", d: "Trezeguet" }, correctAnswer: "a" },
  { question: "Which country’s league is called Serie A?", answers: { a: "Spain", b: "Italy", c: "Germany", d: "France" }, correctAnswer: "b" },
  { question: "Which English club has the nickname 'The Toffees'?", answers: { a: "Everton", b: "Liverpool", c: "Chelsea", d: "Arsenal" }, correctAnswer: "a" },
  { question: "Which player won the FIFA Puskás Award in 2020?", answers: { a: "Lionel Messi", b: "Son Heung-min", c: "Cristiano Ronaldo", d: "Robert Lewandowski" }, correctAnswer: "b" },
  { question: "Which team won the 2020 UEFA Europa League?", answers: { a: "Sevilla", b: "Inter Milan", c: "Manchester United", d: "Villarreal" }, correctAnswer: "a" },
  { question: "Which country’s football team is nicknamed 'La Albiceleste'?", answers: { a: "Argentina", b: "Spain", c: "Italy", d: "Portugal" }, correctAnswer: "a" },
  { question: "Which player is nicknamed 'The Atomic Flea'?", answers: { a: "Lionel Messi", b: "Cristiano Ronaldo", c: "Neymar", d: "Kylian Mbappé" }, correctAnswer: "a" },
  { question: "Which club won the first Premier League title in 1992?", answers: { a: "Manchester United", b: "Blackburn Rovers", c: "Arsenal", d: "Liverpool" }, correctAnswer: "a" },
  { question: "What is the term for restarting play after the ball has gone out of bounds?", answers: { a: "Throw-in", b: "Corner", c: "Goal kick", d: "Free kick" }, correctAnswer: "a" },
];

// Quiz state variables
let currentQuestions = getRandomQuestions(10);
let questionIndex = 0;
let score = 0;
let userAnswer = null;

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score-display");
const quizContainer = document.querySelector(".quiz-container");
const finalScreen = document.getElementById("final-screen");
const finalScoreEl = document.getElementById("final-score");
const headingEl = finalScreen.querySelector("h2");
const resetButton = document.getElementById("reset-button");

// Function to get random questions
function getRandomQuestions(amount) {
  return [...myQuestions].sort(() => Math.random() - 0.5).slice(0, amount);
}

// Function to display current question
function showQuestion() {
  const current = currentQuestions[questionIndex];
  questionElement.textContent = current.question;
  const answers = Object.values(current.answers);
  const keys = Object.keys(current.answers);

  answerButtons.forEach((btn, i) => {
    btn.textContent = answers[i];
    btn.dataset.answer = keys[i];
    btn.classList.remove("selected");
  });

  userAnswer = null;
}

// Answer button selection
answerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    answerButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    userAnswer = btn.dataset.answer;
  });
});

// Submit answer
submitButton.addEventListener("click", () => {
  if (!userAnswer) {
    alert("Please select an answer!");
    return;
  }

  if (userAnswer === currentQuestions[questionIndex].correctAnswer) {
    score++;
  }

  questionIndex++;
  scoreDisplay.textContent = `Score: ${score} / ${currentQuestions.length}`;

  if (questionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    quizContainer.style.display = "none";
    showFinalScreen();
  }
});

// Falling footballs effect
function launchFootballs(count = 50) {
    const overlay = document.getElementById("football-overlay");

    for (let i = 0; i < count; i++) {
        const ball = document.createElement("div");
        ball.classList.add("football");
        ball.textContent = "⚽";

        ball.style.left = Math.random() * 100 + "vw";
        ball.style.animationDuration = 2 + Math.random() * 3 + "s";
        ball.style.fontSize = 1.5 + Math.random() * 1.5 + "rem";

        overlay.appendChild(ball);

        // cleanup
        setTimeout(() => ball.remove(), 5000);
    }
}

// Final screen display
function showFinalScreen() {
  launchFootballs(50);
  headingEl.textContent = score < 5 ? "Better luck next time!" : "🎉 Congratulations! 🎉";
  finalScoreEl.textContent = `Your Score: ${score} / ${currentQuestions.length}`;
  finalScreen.style.display = "block";
}

//Reset quiz
resetButton.addEventListener("click", () => {
  questionIndex = 0;
  score = 0;
  userAnswer = null;
  currentQuestions = getRandomQuestions(10);

  quizContainer.style.display = "block";
  finalScreen.style.display = "none";
  scoreDisplay.textContent = `Score: ${score} / ${currentQuestions.length}`;
  showQuestion();
});

showQuestion();



