//Connect to HTML -- getElementbyID
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("quiz-questions");
var choicesEl = document.getElementById("quiz-choices");
var verdictEl = document.getElementById("quiz-verdict");
var userinitialsEl = document.getElementById("user-initials");

var quizStartButton = document.getElementById("quiz-start-button");
var quizSaveButton = document.getElementById("quiz-save-button");

//Write storage variables (timer, etc)

//Write array for questions
var quizquestions = [
    {
        question: "Which of the following is not a valid JavaScript operator?"
        choices: ["A. +=", "B. ==", "C. ++", "D. =+"]
        answer: "D. =+"
    },
    {
        question: "What value is returned by 9 % 5?"
        choices: ["A. 3", "B. 4", "C. 5", "D. 6"]
        answer: "B. 4"
    },
    {
        question: "Which of these options does NOT require the use of parentheses?"
        choices: ["A. innerHTML", "B. console.log", "C. prompt", "D. alert"]
        answer: "A. innerHTML"
    }
    {
        question: "Every valid web page can be represented as a tree. This tree is referred to as the:"
        choices: ["A. JavaScript", "B. Application Programming Interfaces (API)", "C. Document Object Model (DOM)", "D. HTML"]
        answer: "C. Document Object Model (DOM)"
    },
    {
        question: "JavaScript uses what kind of interface to access the DOM structure?"
        choices: ["A. CSS3", "B. An Application Programming Interface (API)", "C. HTML5", "D. C++"]
        answer: "B. An Application Programming Interface (API)"
    },
    {
        question: "Which of the following does not generate output directly to the screen?"
        choices: ["A. console.log(message);", "B. document.write(message);", "C. element.innerHTML = message;"]
        answer: "A. console.log(message)"
    },
    {
        question: "How do you properly access the first element in an array variable named 'fruit'?"
        choices: ["A. fruit[1];", "B. [fruit]0;", "C. fruit[0];", "D. fruit_0;"]
        answer: "C. fruit[0]"
    },
]

//Add event listeners to start & save quiz
quizStartButton.addEventListener("click", startQuiz);
quizSaveButton.addEventListener("click", saveScore);

/*Write functions:
- start the quiz*/
function startQuiz() {

}

//- each question appears
function questionAppear() {

}
//- function to check each question (verify the answers)
function verifyAnswer() {

}

//- function to end quiz
function endQuiz() {

}
//- function to save score
function saveScore() {}