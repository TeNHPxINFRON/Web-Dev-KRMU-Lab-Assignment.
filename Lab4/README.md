Prompt Quizzer – JavaScript Console Quiz Game
Overview

Prompt Quizzer is a simple JavaScript-based quiz game played directly inside the browser console.
It demonstrates core JavaScript concepts such as arrays, loops, functions, string methods, and conditional logic — all without using HTML or DOM manipulation.

Users answer questions through prompt(), receive instant feedback with alert(), and view their final score at the end of the quiz.

Features

1.Array of questions stored as objects

2. prompt() for user input

3. Input cleaning using trim() and toLowerCase()

4. Score calculation

5. Immediate “Correct” / “Wrong” feedback

6. Final score summary

7. Modular function-based structure (runQuiz())

How It Works

1. Questions are stored inside an array named quizQuestions.

2. The runQuiz() function loops through each question.

3. User answers are taken through prompt().

4. Answers are normalized with

  .trim()

  .toLowerCase()

5. Score increases for each correct answer.

6. At the end, an alert shows the final score.

Code (quiz.js)

const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who created JavaScript?", answer: "brendan eich" },
  { question: "What keyword declares a variable in JS?", answer: "let" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = prompt(quizQuestions[i].question)
      .toLowerCase()
      .trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! Correct answer: ${quizQuestions[i].answer}`);
    }
  }

  alert(`Quiz Finished! Your Score: ${score}/${quizQuestions.length}`);
}

runQuiz();

How to Run

1. Open any browser (Chrome recommended).

2. Press F12 → open the Console.

3. Paste the entire code.

4. Press Enter.

5.The quiz will start automatically.

