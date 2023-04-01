const quizData = [
  {
    question: "Green chemistry is also called as",
    a: "Life chemistry",
    b: "Environmental chemistry",
    c: "Organic chemistry",
    d: "Sustainable chemistry",
    correct: "d",
  },
  {
    question: "An ideal solvent facilitates the",
    a: "Mass transfer",
    b: "Dissolving property",
    c: "Combustion",
    d: "Titration",
    correct: "a",
  },
  {
    question: "A desirable green solvent should be",
    a: "Costly",
    b: "Toxic",
    c: "Readily available",
    d: "Synthetic",
    correct: "c",
  },
];
let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
const loadQuestion = () => {
  if (total === index) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
    index++;
    loadQuestion();
  } else {
    alert(`Please Try Again`);
  }

});

const getAnswer = () => {
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });

  return ans;
};

const reset = () => {
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};

const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `;
};

loadQuestion(index);
