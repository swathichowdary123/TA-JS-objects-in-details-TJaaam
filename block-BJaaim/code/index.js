class Question {
    constructor(title, options, correctAnswer) {
      this.title = title;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    isCorrect(answer) {
      return this.correctAnswer === answer;
    }
  
    getCorrectAnswer() {
      return this.correctAnswer;
    }
  
    createUI() {
      console.log(`Question: ${this.title}`);
      console.log(`Options: ${this.options.join(', ')}`);
    }
  }
  class Quiz {
    constructor(questions) {
      this.allQuestions = questions;
      this.activeIndex = 0;
      this.score = 0;
    }
  
    nextQuestion() {
      if (this.activeIndex < this.allQuestions.length - 1) {
        this.activeIndex++;
      } else {
        console.log('Quiz completed!');
      }
    }
  
    createUI() {
      console.log(`Active Question: ${this.activeIndex + 1}`);
      console.log(`Score: ${this.score}`);
    }
  
    updateScore() {
      const currentQuestion = this.allQuestions[this.activeIndex];
      console.log(`Score updated! New score: ${this.score}`);
    }
  }