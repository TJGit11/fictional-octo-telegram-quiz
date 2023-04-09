let timer = 90;

let timerId = setInterval(function () {
  timer -= 1;
  console.log(timer);
}, 1000);

// if question === wrong
// timer -= 10

quizEnd(function () {
  if (timer === 0) {
    clearInterval(timerId);
  }
});
