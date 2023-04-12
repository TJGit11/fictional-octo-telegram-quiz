let timer = 90;
let quizDiv = document.querySelector("#quiz");
let quizStart = document.querySelector("#startQuiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
// get scores
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// let timerId = setInterval(function () {
//   timer -= 1;
//   console.log(timer);
// }, 1000);

// if question === wrong
// timer -= 10

// quizEnd(function () {
//   if (timer === 0) {
//     clearInterval(timerId);
//   }
// });

let questions = [
  {
    question: "Question 1",
    answers: [
      "possible answer1",
      "possible answer2",
      "possible answer3",
      "possible answer4",
    ],
    correctAnswer: "possible answer 1 ",
  },

  {
    question: "Question 2",
    answers: [
      "possible answer1",
      "possible answer2",
      "possible answer3",
      "possible answer4",
    ],
    correctAnswer: "possible answer 2 ",
  },
  {
    question: "Question 3",
    answers: [
      "possible answer1",
      "possible answer2",
      "possible answer3",
      "possible answer4",
    ],
    correctAnswer: "possible answer 3 ",
  },
  ,
  {
    question: "Question 4",
    answers: [
      "possible answer1",
      "possible answer2",
      "possible answer3",
      "possible answer4",
    ],
    correctAnswer: "possible answer 4 ",
  },

  {
    question: "Question 5",
    answers: [
      "possible answer1",
      "possible answer2",
      "possible answer3",
      "possible answer4",
    ],
    correctAnswer: "possible answer 5 ",
  },

  {
    question: "Question 6",
    answers: [
      "possible answer1",
      "possible answer2",
      "possible answer3",
      "possible answer4",
    ],
    correctAnswer: "possible answer 6 ",
  },
];

quizStart.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("clicked!");

    currentQuestion++;
    renderQuestion();
  }
});

// store scores
// localStorage.setItem(
//   "Highscores",
//   JSON.stringify([{ initials: "dre", score: 80 }])
// );

let currentQuestion = 0;
renderQuestion();

function renderQuestion() {
  // console.log(questions[currentQuestion].question);
  questionButton1.textContent = questions[currentQuestion].answers[0];
  questionButton2.textContent = questions[currentQuestion].answers[1];
  questionButton3.textContent = questions[currentQuestion].answers[2];
  questionButton4.textContent = questions[currentQuestion].answers[3];
}

quizDiv.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("clicked!");

    currentQuestion++;
    renderQuestion();
  }
});
