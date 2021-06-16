const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
console.log(`Welcome, ${candidateName}!`)


}

let correct = 0;

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);

};


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = correct / 5 * 100;
  
  for (i = 0; i < questions.length; i++) {
  if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
    console.log(`Your answer was ${candidateAnswers[i]}, and that is the correct answer!`);
    correct = correct + 1;
  } else {
    console.log(`You answer was ${candidateAnswers[i]}, but that is not correct. The correct answer is ${correctAnswers[i]}. `)
  };
  }
  
  if (grade >= 79) {
  console.log(`Congratulations! You were required to achieve at or higher than 80% on this test to pass and you scored ${grade}%! You passed!`);
} else {
  console.log(`Unfortunately, you were required to score at least 80% to pass this test, and you scored  ${grade}%. You will need to retake the test if you wish to pass.`);
};


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};