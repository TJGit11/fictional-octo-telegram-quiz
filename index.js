let quizDiv = document.querySelector("#quiz");
let quizStart = document.querySelector("#startQuiz");
let questionsDiv = document.querySelector("#questions");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timerElement = document.querySelector("#timer");
let hideEndMessage = document.querySelector("#endQuiz");
let startButton = document.querySelector("#startButton");
let currentQuestion = 0;
let timerID;

let timer = 90;
function startTimer() {
  let timerID = setInterval(function () {
    timer = Math.max(0, timer - 1);
    timerElement.textContent = timer;
    if (timer === 0) {
      clearInterval(timerID);
      endQuiz();
    }
  }, 1000);
}

//TODO finish quizEnd function -> disable the buttons, and prompt for high scores
//TODO high scores page

// questions array contains multiple question objects that comprise the quiz questions, options, and correct answers
let questions = [
  {
    question: "What color is the sky?",
    answers: ["Red", "Orange", "Yellow", "Blue"],
    correctAnswer: "Blue",
  },

  {
    question: "How many oz in a quart?",
    answers: ["32 oz", "16 oz", "4 oz", "8 oz"],
    correctAnswer: "32 oz",
  },
  {
    question: "What color is grass?",
    answers: ["Green", "Yellow", "Brown", "Purple"],
    correctAnswer: "Green",
  },
  {
    question: "How many legs does a dog have?",
    answers: ["Nine", "Seven", "Six", "Four"],
    correctAnswer: "Four",
  },

  {
    question: "What is the center of this solar system?",
    answers: ["Venus", "Jupiter", "Earth", "The sun"],
    correctAnswer: "The sun",
  },

  {
    question:
      "What type of animal is the popular video game character Sonic modeled after?",
    answers: ["Gopher", "Possum", "Wolf", "Hedgehog"],
    correctAnswer: "Hedgehog",
  },
];

startQuiz();
function startQuiz() {
  hideEndMessage.classList.add("hidden");
  quizDiv.classList.add("hidden");
}

quizStart.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("clicked!");

    quizStart.classList.add("hidden");
    quizDiv.classList.remove("hidden");

    startTimer();
    renderQuestion();
  }
});
let correctCount = 0;
let incorrectCount = 0;
quizDiv.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    // console.log("clicked!");
    if (event.target.innerText === questions[currentQuestion].correctAnswer) {
      correctCount++;
      correcto.textContent = "Correct" + " " + "(" + correctCount + ")";
    } else {
      incorrectCount++;
      correcto.textContent = "Incorrect" + " " + "(" + incorrectCount + ")";
      timer -= 10;
    }
    currentQuestion++;
    renderQuestion();
  }
});

// renderQuestion();

// function to render all questions from the questions array
function renderQuestion() {
  questionsDiv.textContent = questions[currentQuestion].question;
  questionButton1.textContent = questions[currentQuestion].answers[0];
  questionButton2.textContent = questions[currentQuestion].answers[1];
  questionButton3.textContent = questions[currentQuestion].answers[2];
  questionButton4.textContent = questions[currentQuestion].answers[3];
  // if currentQuestion is at the end of the question array then end the quiz
  if (currentQuestion === questions.length) {
    endQuiz();
  }
}

// endQuiz adds the disabled class to an element to disable pointer events via css
function endQuiz() {
  clearInterval(timerID);
  hideEndMessage.classList.remove("hidden");
  console.log("Quiz is over");
  quizDiv.classList.add("disabled");
}
