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
        } 
        
        else {
            alert(`Wrong! Correct answer: ${quizQuestions[i].answer}`);
        }
    }

    alert(`Quiz Finished! Your Score: ${score}/${quizQuestions.length}`);
}

runQuiz();
