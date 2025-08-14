const questions = [
    {
        question: "What is the value of Sin 0°?", answers: [
            { text: "0", correct: true }, { text: "1/2", correct: false }, { text: "√3/2", correct: false }, { text: "1/√2", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Sin 30°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: true }, { text: "√3/2", correct: false }, { text: "1/√2", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Sin 45°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: false }, { text: "√3/2", correct: false }, { text: "1/√2", correct: true }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Sin 60°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: false }, { text: "√3/2", correct: true }, { text: "1/√2", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Sin 90°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: false }, { text: "√3/2", correct: false }, { text: "1/√2", correct: false }, { text: "1", correct: true }
        ]
    },

    // Cosine values
    {
        question: "What is the value of Cos 0°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: false }, { text: "√3/2", correct: false }, { text: "1/√2", correct: false }, { text: "1", correct: true }
        ]
    },
    {
        question: "What is the value of Cos 30°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: false }, { text: "√3/2", correct: true }, { text: "1/√2", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cos 45°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: false }, { text: "√3/2", correct: false }, { text: "1/√2", correct: true }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cos 60°?", answers: [
            { text: "0", correct: false }, { text: "1/2", correct: true }, { text: "√3/2", correct: false }, { text: "1/√2", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cos 90°?", answers: [
            { text: "0", correct: true }, { text: "1/2", correct: false }, { text: "√3/2", correct: false }, { text: "1/√2", correct: false }, { text: "1", correct: false }
        ]
    },

    // Tan values
    {
        question: "What is the value of Tan 0°?", answers: [
            { text: "0", correct: true }, { text: "1/√3", correct: false }, { text: "1", correct: false }, { text: "√3", correct: false }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Tan 30°?", answers: [
            { text: "0", correct: false }, { text: "1/√3", correct: true }, { text: "1", correct: false }, { text: "√3", correct: false }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Tan 45°?", answers: [
            { text: "0", correct: false }, { text: "1/√3", correct: false }, { text: "1", correct: true }, { text: "√3", correct: false }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Tan 60°?", answers: [
            { text: "0", correct: false }, { text: "1/√3", correct: false }, { text: "1", correct: false }, { text: "√3", correct: true }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Tan 90°?", answers: [
            { text: "0", correct: false }, { text: "1/√3", correct: false }, { text: "1", correct: false }, { text: "√3", correct: false }, { text: "undefined", correct: true }
        ]
    },

    // Cosec values
    {
        question: "What is the value of Cosec 0°?", answers: [
            { text: "undefined", correct: true }, { text: "2", correct: false }, { text: "√2", correct: false }, { text: "2/√3", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cosec 30°?", answers: [
            { text: "undefined", correct: false }, { text: "2", correct: true }, { text: "√2", correct: false }, { text: "2/√3", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cosec 45°?", answers: [
            { text: "undefined", correct: false }, { text: "2", correct: false }, { text: "√2", correct: true }, { text: "2/√3", correct: false }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cosec 60°?", answers: [
            { text: "undefined", correct: false }, { text: "2", correct: false }, { text: "√2", correct: false }, { text: "2/√3", correct: true }, { text: "1", correct: false }
        ]
    },
    {
        question: "What is the value of Cosec 90°?", answers: [
            { text: "undefined", correct: false }, { text: "2", correct: false }, { text: "√2", correct: false }, { text: "2/√3", correct: false }, { text: "1", correct: true }
        ]
    },

    // Sec values
    {
        question: "What is the value of Sec 0°?", answers: [
            { text: "1", correct: true }, { text: "2", correct: false }, { text: "√2", correct: false }, { text: "2/√3", correct: false }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Sec 30°?", answers: [
            { text: "1", correct: false }, { text: "2", correct: false }, { text: "√2", correct: false }, { text: "2/√3", correct: true }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Sec 45°?", answers: [
            { text: "1", correct: false }, { text: "2", correct: false }, { text: "√2", correct: true }, { text: "2/√3", correct: false }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Sec 60°?", answers: [
            { text: "1", correct: false }, { text: "2", correct: true }, { text: "√2", correct: false }, { text: "2/√3", correct: false }, { text: "undefined", correct: false }
        ]
    },
    {
        question: "What is the value of Sec 90°?", answers: [
            { text: "1", correct: false }, { text: "2", correct: false }, { text: "√2", correct: false }, { text: "2/√3", correct: false }, { text: "undefined", correct: true }
        ]
    },

    // Cot values
    {
        question: "What is the value of Cot 0°?", answers: [
            { text: "undefined", correct: true }, { text: "√3", correct: false }, { text: "1", correct: false }, { text: "1/√3", correct: false }, { text: "0", correct: false }
        ]
    },
    {
        question: "What is the value of Cot 30°?", answers: [
            { text: "undefined", correct: false }, { text: "√3", correct: true }, { text: "1", correct: false }, { text: "1/√3", correct: false }, { text: "0", correct: false }
        ]
    },
    {
        question: "What is the value of Cot 45°?", answers: [
            { text: "undefined", correct: false }, { text: "√3", correct: false }, { text: "1", correct: true }, { text: "1/√3", correct: false }, { text: "0", correct: false }
        ]
    },
    {
        question: "What is the value of Cot 60°?", answers: [
            { text: "undefined", correct: false }, { text: "√3", correct: false }, { text: "1", correct: false }, { text: "1/√3", correct: true }, { text: "0", correct: false }
        ]
    },
    {
        question: "What is the value of Cot 90°?", answers: [
            { text: "undefined", correct: false }, { text: "√3", correct: false }, { text: "1", correct: false }, { text: "1/√3", correct: false }, { text: "0", correct: true }
        ]
    }
];

const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const clickSound = new Audio("sounds/click.mp3");






const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Play sound
    if (isCorrect) {
        correctSound.play();
        selectedBtn.classList.add("correct");
        score++;
    } else {
        wrongSound.play();
        selectedBtn.classList.add("incorrect");
    }

    // Highlight correct answer & disable all buttons
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Show Next button
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    clickSound.play();
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();