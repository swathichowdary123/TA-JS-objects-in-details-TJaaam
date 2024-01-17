//without object
const title = 'Where is the capital of Jordan';
const options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
const correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

//organise using object
 question = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
  isAnswerCorrect: function (index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex];
  },
};

//use a function to create object
function createQuestion(title, options, correctAnswerIndex) {
  return {
    title,
    options,
    correctAnswerIndex,
    isAnswerCorrect: function (index) {
      return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
      return this.options[this.correctAnswerIndex];
    },
  };
}

//Convert the function to use `this` keyword
function createQuestion(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
  this.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  this.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
}

const question = new createQuestion(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);

//Write test by creating two objects also test both methods.
const testData1 = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};

const testData2 = {
  title: 'What is the largest mammal?',
  options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
  correctAnswerIndex: 1,
};

const question1 = createQuestion(
  testData1.title,
  testData1.options,
  testData1.correctAnswerIndex
);

const question2 = createQuestion(
  testData2.title,
  testData2.options,
  testData2.correctAnswerIndex
);
