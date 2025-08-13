const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "C++"],
    answer: "C++"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<script>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Desktop Oriented Model"],
    answer: "Document Object Model"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft"],
    answer: "Netscape"
  },
  {
    question: "What is the correct syntax to refer to an external script?",
    options: ['<script src="app.js">', '<script href="app.js">', '<script ref="app.js">'],
    answer: '<script src="app.js">'
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>"],
    answer: "<ul>"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!-- -->"],
    answer: "//"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(option, button);
    optionsEl.appendChild(button);
  });
  nextBtn.style.display = "none";
}

function selectAnswer(selected, button) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
    button.style.backgroundColor = "#2ecc71"; // green
  } else {
    button.style.backgroundColor = "#e74c3c"; // red
  }

  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `You answered ${score} out of ${quizData.length} correctly.`;
}

window.onload = loadQuestion;
