const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correct: 0
    },
    {
      question: "What is 2 + 2?",
      choices: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Earth", "Jupiter", "Venus"],
      correct: 2
    },
    {
        question: "What is the capital of india?",
        choices:["Delhi","Mumbai","Majuragate","Surat"],
        correct:0
    },
    {
        question:"Brain of computer is?",
        choices:["Printer","Mouse","Moniter","CPU"],
        correct:3
    }

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const choices = document.getElementById("choices");
    choices.innerHTML = "";
    q.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "choice";
      button.textContent = choice;
      button.setAttribute("data-index", index);
      button.onclick = checkAnswer;
      choices.appendChild(button);
    });
  }
  
  function checkAnswer(event) {
    const selectedOption = parseInt(event.target.getAttribute("data-index"));
    const correctOption = quizData[currentQuestion].correct;
    const feedback = document.getElementById("feedback");
    if (selectedOption === correctOption) {
      feedback.textContent = "Correct!";
      score++;
    } else {
      feedback.textContent = "Incorrect!";
    }
    document.querySelectorAll(".choice").forEach(button => {
      button.disabled = true;
    });
    document.getElementById("nextButton").disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      displayQuestion();
      document.getElementById("feedback").textContent = "";
      document.querySelectorAll(".choice").forEach(button => {
        button.disabled = false;
      });
      document.getElementById("nextButton").disabled = true;
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById("question").textContent = "Quiz completed!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("feedback").textContent = `You scored ${score} out of ${quizData.length}!`;
    document.getElementById("nextButton").style.display = "none";
  }
  
  displayQuestion();
  