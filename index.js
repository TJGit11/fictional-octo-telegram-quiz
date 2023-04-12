let timer = 90;

let timerId = setInterval(function () {
  timer -= 1;
  console.log(timer);
}, 1000);

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
    answers: ["possible answer1", "possible answer2", "possible answer3"],
    correctAnswer: "possible answer 3 (or 2 as index)",
  },

  {
    question: "Question 1",
    answers: ["possible answer1", "possible answer2", "possible answer3"],
    correctAnswer: "possible answer 3 (or 2 as index)",
  },
  {
    question: "Question 1",
    answers: ["possible answer1", "possible answer2", "possible answer3"],
    correctAnswer: "possible answer 3 (or 2 as index)",
  },
  ,
  {
    question: "Question 1",
    answers: ["possible answer1", "possible answer2", "possible answer3"],
    correctAnswer: "possible answer 3 (or 2 as index)",
  },

  {
    question: "Question 1",
    answers: ["possible answer1", "possible answer2", "possible answer3"],
    correctAnswer: "possible answer 3 (or 2 as index)",
  },

  {
    question: "Question 1",
    answers: ["possible answer1", "possible answer2", "possible answer3"],
    correctAnswer: "possible answer 3 (or 2 as index)",
  },
];

console.log(questions[1].question);
console.log(questions[1].answers[0]);
console.log(questions[1].answers[1]);
console.log(questions[1].answers[2]);
console.log(questions[1].correctAnswer);
