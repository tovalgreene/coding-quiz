document.addEventListener('DOMContentLoaded', function () {
    var timerElement = document.getElementById("timer");
    var questionsElement = document.getElementById("quiz-questions");
    var choicesElement = document.getElementById("quiz-choices");
    var verdictElement = document.getElementById("quiz-verdict");
    var userinitialsElement = document.getElementById("user-initials-section");

    var startButton = document.getElementById("quiz-start-button");
    var saveButton = document.getElementById("quiz-save-button");
    var timer;
    var timerCount = 75;
    var questionIndex = 0;

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
    function startQuiz() {
        document.getElementById('quiz-section').style.display = 'block';

        timerElement.textContent = "Time: " + timerCount; // Moved inside the startQuiz function

        timer = setInterval(function () {
            timerCount--;
            timerElement.textContent = "Time: " + timerCount;
            if (timerCount <= 0 || questionIndex === quizquestions.length) {
                endQuiz();
            }
        }, 1000);

        questionAppear();
        startButton.style.display = 'none';
    }

    function questionAppear() {
        var currentQuestion = quizquestions[questionIndex];
        questionsElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";
        verdictElement.textContent = "";

        currentQuestion.choices.forEach(function (choice) {
            var choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choiceButton.setAttribute("class", "choice");
            choiceButton.setAttribute("data-answer", choice);
            choiceButton.addEventListener("click", verifyAnswer);
            choicesElement.appendChild(choiceButton);
        });
    }

    function verifyAnswer(event) {
        var selectedAnswer = event.currentTarget.getAttribute("data-answer"); // Changed to currentTarget
        var correctAnswer = quizquestions[questionIndex].answer;
        
        console.log("Selected Answer: ", selectedAnswer); // Debugging line
        console.log("Correct Answer: ", correctAnswer); // Debugging line
        
        if (selectedAnswer === correctAnswer) {
            console.log("Correct Answer Selected!"); // Debugging line
            verdictElement.innerHTML = "You're right!";
        } else {
            console.log("Incorrect Answer Selected!"); // Debugging line
            verdictElement.innerHTML = "Sorry, you're incorrect.";
            timerCount -= 10;
            if (timerCount < 0) timerCount = 0;
            timerElement.textContent = "Time: " + timerCount;
        }
        
        console.log(verdictElement); 

        questionIndex++;
        if (questionIndex < quizquestions.length) {
            questionAppear();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(timer);
        userinitialsElement.style.display = 'block';
        saveButton.style.display = 'block';
    }

    function saveQuiz() {
        var initials = document.getElementById("initials").value;
        if (initials) {
            var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
            var newScore = { initials: initials, score: timerCount };
            highscores.push(newScore);
            localStorage.setItem("highscores", JSON.stringify(highscores));
        } else {
            alert('Please enter your initials!');
        }
    }

    startButton.addEventListener("click", startQuiz);
    saveButton.addEventListener("click", saveQuiz);

});