'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
// ... existing JavaScript code ...

document.addEventListener('DOMContentLoaded', function() {
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  const myQuestions = [
    {
      question: "What is the Finnish word for 'Hello'?",
      answers: {
        a: "Hei",
        b: "Terve",
        c: "Moi"
      },
      correctAnswer: "c"
    },
    {
      question: "How do you say 'Thank you' in Finnish?",
      answers: {
        a: "Kiitos",
        b: "Anteeksi",
        c: "Hyvää päivää"
      },
      correctAnswer: "a"
    }
    // Add more questions as needed
  ];
function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });
  quizContainer.innerHTML = output.join('');
}


  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  buildQuiz();
  submitButton.addEventListener('click', showResults);
});
