const input = require('readline-sync');

let candidateName = ("");
let correctAnswer = "Sally Ride";

candidateName = input.question("What is your name? ");
console.log(`Welcome, ${candidateName}!`);

// let candidateAnswer = input.question("Who was the first American woman in space? ");

// if (candidateAnswer == correctAnswer) {
//   console.log("Correct!")
// } else {
// console.log("Close, but no cigar!")
// };

//Part Two
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let answers = [];
let correct = 0;

for (i = 0; i < questions.length; i++) {
  answers[i] = input.question(questions[i]);
  if (answers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
    console.log(`Your answer was ${answers[i]}, and that is the correct answer!`);
    correct = correct + 1;
  } else {
    console.log(`You answer was ${answers[i]}, but that is not correct. The correct answer is ${correctAnswers[i]}. `)
  };
};

let grade = correct / 5 * 100;

if (grade >= 79) {
  console.log(`Congratulations! You were required to achieve at or higher than 80% on this test to pass and you scored a ${grade}! You passed!`);
} else {
  console.log(`Unfortunately, you were required to score at least 80% to pass this test, and you scored a ${grade}. You will need to retake the test if you wish to pass.`);
};


