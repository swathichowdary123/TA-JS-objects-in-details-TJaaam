// Prototypal pattern of object creation
let QuestionPrototypal = {
    isAnswerCorrect: function (userAnswer) {
      return userAnswer === this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
      return this.options[this.correctAnswerIndex];
    },
  };
  
  let firstQuestionPrototypal = Object.create(QuestionPrototypal);
  firstQuestionPrototypal.title = 'Where is the capital of Jordan';
  firstQuestionPrototypal.options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
  firstQuestionPrototypal.correctAnswerIndex = 1;

  // Pseudoclassical Pattern
function QuestionPseudoclassical(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  
  QuestionPseudoclassical.prototype.isAnswerCorrect = function (userAnswer) {
    return userAnswer === this.correctAnswerIndex;
  };
  
  QuestionPseudoclassical.prototype.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  
  let firstQuestionPseudoclassical = new QuestionPseudoclassical(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  
// Using class
class QuestionClass {
    constructor(title, options, correctAnswerIndex) {
      this.title = title;
      this.options = options;
      this.correctAnswerIndex = correctAnswerIndex;
    }
  
    isAnswerCorrect(userAnswer) {
      return userAnswer === this.correctAnswerIndex;
    }
  
    getCorrectAnswer() {
      return this.options[this.correctAnswerIndex];
    }
  }
  
  let firstQuestionClass = new QuestionClass(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );