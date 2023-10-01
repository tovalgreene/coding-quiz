//Connect to HTML -- getElementbyID
var timerElement = document.getElementById("timer");
timerElement.textContent = "Time: " + timerCount;
var questionsElement = document.getElementById("quiz-questions");
var choicesElement = document.getElementById("quiz-choices");
var verdictElement = document.getElementById("quiz-verdict");
var userinitialsElement = document.getElementById("user-initials");

var startButton = document.getElementById("quiz-start-button");
var saveButton = document.getElementById("quiz-save-button");

//Write timer variable:
var timer;
var timerCount = 75;

//Keep track of current question index
var questionIndex = 0;

//Write array for questions
var quizquestions = [
    {
        question: "Which of the following is not a valid JavaScript operator?",
        choices: ["A. +=", "B. ==", "C. ++", "D. =+"],
        answer: "D. =+"
    },
    {
        question: "What value is returned by 9 % 5?",
        choices: ["A. 3", "B. 4", "C. 5", "D. 6"],
        answer: "B. 4"
    },
    {
        question: "Which of these options does NOT require the use of parentheses?",
        choices: ["A. innerHTML", "B. console.log", "C. prompt", "D. alert"],
        answer: "A. innerHTML"
    },
    {
        question: "Every valid web page can be represented as a tree. This tree is referred to as the:",
        choices: ["A. JavaScript", "B. Application Programming Interfaces (API)", "C. Document Object Model (DOM)", "D. HTML"],
        answer: "C. Document Object Model (DOM)"
    },
    {
        question: "JavaScript uses what kind of interface to access the DOM structure?",
        choices: ["A. CSS3", "B. An Application Programming Interface (API)", "C. HTML5", "D. C++"],
        answer: "B. An Application Programming Interface (API)"
    },
    {
        question: "Which of the following does not generate output directly to the screen?",
        choices: ["A. console.log(message);", "B. document.write(message);", "C. element.innerHTML = message;"],
        answer: "A. console.log(message)"
    },
    {
        question: "How do you properly access the first element in an array variable named 'fruit'?",
        choices: ["A. fruit[1];", "B. [fruit]0;", "C. fruit[0];", "D. fruit_0;"],
        answer: "C. fruit[0]"
    },
]

/*Write functions:
- start the quiz*/
function startQuiz() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;

        if (timerCount <= 0 || questionIndex === quizquestions.length) {
                endQuiz();
        }
     }, 1000); 
    
    questionAppear();
    startButton.style.display = 'none'; //hides start button when quiz starts
}

//Add event listener to start quiz
startButton.addEventListener("click", startQuiz);

//- each question appears
function questionAppear() {
    var currentQuestion = quizquestions[questionIndex];
    questionsElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    verdictElement.textContent = ""; //clears verdict of last question 

    currentQuestion.choices.forEach(function(choice) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("data-answer", choice);

        choiceButton.addEventListener("click", verifyAnswer);
        choicesElement.appendChild(choiceButton);
    });
 }


//- function to check each question (verify the answers)
function verifyAnswer(event) {
    var selectedAnswer = event.target.getAttribute("data-answer");
    var correctAnswer = quizquestions[questionIndex].answer;
    
    if (selectedAnswer === correctAnswer) {
        verdictElement.textContent = "You're right!";
    } else {
        verdictElement.textContent = "Sorry, you're incorrect.";
        timerCount -= 10;
        if (timerCount < 0) {
            timerCount = 0;
        }
        timerElement.textContent = "Time: " + timerCount;
    }

    questionIndex++;
    if (questionIndex < quizquestions.length) {
        questionAppear();
    } else {
        endQuiz();
    }
}
//- function to end quiz
function endQuiz() {
    clearInterval(timer);
    userinitialsElement.style.display = 'block';
    saveButton.style.display = 'block';
}


//- function to save score
function saveQuiz() {
    var initials = document.getElementById("initials").value;
    if(initials) {
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            initials: initials,
            score: timerCount
        };

        highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
    } else {
        alert('Please enter your initials!');
    }
}

//event listener for save button
saveButton.addEventListener("click", saveQuiz);
