/////////////////////////////////////////////////////////
//Declare Questions and their answers here in Object form
////////////////////////////////////////////////////////
const questions = [
  {
    que: "Which is a markup language?",
    a: "HTML",
    b: "PHP",
    c: "JavaScript",
    d: "Ruby",
    correct: "a",
  },
  {
    que: "JSX Syntax is?",
    a: "<p></p>",
    b: "<? p ?>",
    c: "function(r){}",
    d: "<navi />",
    correct: "d",
  },
  {
    que: "CSS stands for?",
    a: "Hyper Text Markup Language",
    b: "Preprocessor Lang.",
    c: "Correct side server",
    d: "Cascading style sheets",
    correct: "d",
  },
];

//declare index equalto zero
let index = 0;
//calculate total questions present in the object
let total = questions.length;
//declare two variables for right and wrong questions
let right = 0,
  wrong = 0;

//get an element having Questions
const quesBox = document.getElementById("quesBox");
//get all the input options
const optionInputs = document.querySelectorAll(".options");
//fire a function to load Questions
const loadQuestion = () => {
  //check if any questions left?
  if (index === total) {
    //call function to end the quiz
    return endQuiz();
  }
  //reset data
  reset();
  //To fetch no. of questions
  const data = questions[index];
  //code to insert questions and number dynamically
  quesBox.innerText = `${index + 1}) ${data.que}`;
  //fetch the correct answers of the questions
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

/////////////////////////////////////////////////////////////////////////
//submit function that will process questions and save the inputs values
/////////////////////////////////////////////////////////////////////////
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  // function to load questions if any present?
  loadQuestion();
  return;
};

//function to save values for each questions
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

//reset function
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

//for displaying results
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the quiz.</h3>
    <h2>${right}/${total} are correct.</h2>
  `;
};

//Initial Call
loadQuestion();
