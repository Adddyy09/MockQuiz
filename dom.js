export const elements = {};

export function initializeDOMElements() {
    elements.appHeader = document.getElementById('app-header');
    elements.quizContent = document.getElementById('quiz-content');
    elements.mainMenu = document.getElementById('main-menu');
    elements.homeButton = document.getElementById('home-button');
    elements.quizFooter = document.getElementById('quiz-footer');
    elements.questionCard = document.getElementById('question-card');
    elements.questionNumber = document.getElementById('question-number');
    elements.questionText = document.getElementById('question-text');
    elements.optionsContainer = document.getElementById('options-container');
    elements.previousButton = document.getElementById('previous-button');
    elements.nextButton = document.getElementById('next-button');
    elements.submitQuizButton = document.getElementById('submit-quiz-button');
    elements.resultsScreen = document.getElementById('results-screen');
    elements.scoreText = document.getElementById('score-text');
    elements.scoreBreakdown = document.getElementById('score-breakdown');
    elements.reviewButton = document.getElementById('review-button');
    elements.mainMenuButton = document.getElementById('main-menu-button');
    elements.feedbackMessage = document.getElementById('feedback-message');
    elements.progressBar = document.getElementById('progress-bar');
}