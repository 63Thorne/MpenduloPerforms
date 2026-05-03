// Set the correct answer for the current round here
const correctAnswer = "C"; 

function checkAnswer(choice) {
    const feedback = document.getElementById('feedback');
    
    if (choice === correctAnswer) {
        feedback.textContent = "Correct! You've got a great ear! 🎹";
        feedback.style.color = "#4bb543";
    } else {
        feedback.textContent = "Not quite! Try listening again...";
        feedback.style.color = "#ff4444";
    }
}