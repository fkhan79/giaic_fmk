let score: number = 85;
if (score >= 0 && score <= 100) {
  // Check if the score is valid
  if (score >= 90) {
    // Check if the score is A
    console.log("Your grade is A");
  } else if (score >= 80) {
    // Check if the score is B
    console.log("Your grade is B");
  } else if (score >= 70) {
    // Check if the score is C
    console.log("Your grade is C");
  } else if (score >= 60) {
    // Check if the score is D
    console.log("Your grade is D");
  } else {
    // Check if the score is F
    console.log("Your grade is F");
  }
} else {
  // Invalid score
  console.log("Invalid score");
}
