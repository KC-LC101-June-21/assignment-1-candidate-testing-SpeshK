const input = require('readline-sync');

let candidateName = ("");
let correctAnswer = "Sally Ride";

candidateName = input.question("What is your name? ");
console.log("Welcome, " + candidateName + "!");

let candidateAnswer = input.question("Who was the first American woman in space? ")

if (candidateAnswer = correctAnswer) {
  console.log("Great guess!")
} else {
console.log("Not quite!")
}