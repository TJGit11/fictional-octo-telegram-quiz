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
    question: "What color is the sky?",
    answers: ["Red", "Orange", "Yellow", "Blue"],
    correctAnswer: "Blue ",
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
  ,
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
    correctAnswer: "Hedgehog ",
  },
];

quizStart.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("clicked!");

    currentQuestion++;
    renderQuestion();
  }
});

// save button goes here
// store scores
// localStorage.setItem(
//   "Highscores",
//   JSON.stringify([{ initials: "dre", score: 80 }])
// );

let currentQuestion = 0;
renderQuestion();

// function to
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
