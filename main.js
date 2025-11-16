import { elements, initializeDOMElements } from './dom.js';
import { state, resetState, setQuestionIndex, setQuizData } from './state.js';
import { renderQuestion, renderProgressBar, showResults } from './ui.js';

const quizModules = {
    'hcia-cloud-it': './data.js',
    'hcia-ai': './data-hcia-ai.js',
    'hcia-cloud-computing': './hcia-cloud-data.js',
    'hcia-cloud-service': './data-hcia-cloud-service.js',
    'prelim-cloud': './data-prelim-cloud.js',
    'national-cloud': './data-national-cloud.js',
    'hcip-cloud-service': './data-hcip-cloud-service.js',
    'hcip-cloud-computing': './data-hcip-cloud-computing.js',
    'hcip-ai': './data-hcip-ai.js',
    'hcia-cloud-services-reviewer': './data-hcia-cloud-service-reviewer.js',
    'hcip-big-data': './data-hcia-big-data.js',
};

async function startQuiz(quizId) {
    try {
        // 1. Reset the state for a new quiz.
        resetState();

        // 2. Load the new quiz data.
        const modulePath = quizModules[quizId];
        if (!modulePath) throw new Error(`Quiz with id "${quizId}" not found.`);
        
        const { quizData } = await import(modulePath);
        setQuizData(quizData);

        // 3. NOW that data is loaded, initialize the UI and render the first question.
        elements.mainMenu.classList.add('hidden');
        initializeQuiz();
    } catch (error) {
        console.error("Failed to load quiz data:", error);
        alert("Could not load the selected quiz. Please try again.");
    }
}

function initializeQuiz(isReview = false) {
    elements.resultsScreen.classList.add('hidden');
    elements.quizContent.classList.remove('hidden');
    elements.quizFooter.classList.remove('hidden');
    elements.submitQuizButton.classList.add('hidden');

    if (isReview) {
        state.isSubmitted = true;
    }
    renderQuestion();
}

export function handleOptionClick(question, selectedIndex) {
    if (state.isSubmitted) return;

    const currentAnswer = state.userAnswers[question.id] || [];
    let newAnswer;

    if (question.multi) {
        if (currentAnswer.includes(selectedIndex)) {
            newAnswer = currentAnswer.filter(i => i !== selectedIndex);
        } else {
            newAnswer = [...currentAnswer, selectedIndex];
        }
    } else {
        newAnswer = [selectedIndex];
    }

    if (newAnswer.length > 0) {
        state.userAnswers[question.id] = newAnswer;
    } else {
        delete state.userAnswers[question.id];
    }

    renderQuestion();
}

function navigate(direction) {
    const newIndex = state.currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < state.quizData.length) {
        setQuestionIndex(newIndex);
        renderQuestion();
    }
}

function submitQuiz() {
    state.isSubmitted = true;
    showResults();
    setQuestionIndex(0);
    renderProgressBar(); // Update progress dots to show final result colors
}

function handleReview() {
    // "Review Answers" mode
    initializeQuiz(true);
}

function showMainMenu() {
    elements.mainMenu.classList.remove('hidden');
    elements.quizContent.classList.add('hidden');
    elements.quizFooter.classList.add('hidden');
    elements.resultsScreen.classList.add('hidden');
}

// --- Event Listeners ---
function initializeEventListeners() {
elements.previousButton.addEventListener('click', () => navigate(-1));
elements.nextButton.addEventListener('click', () => navigate(1));
elements.submitQuizButton.addEventListener('click', submitQuiz);
elements.reviewButton.addEventListener('click', handleReview);
elements.homeButton.addEventListener('click', showMainMenu);

elements.mainMenuButton.addEventListener('click', showMainMenu);

elements.mainMenu.addEventListener('click', (e) => {
    if (e.target.matches('.menu-button')) {
        const quizId = e.target.dataset.quiz;
        startQuiz(quizId);
    }
});
};



// --- Initial Load ---

document.addEventListener('DOMContentLoaded', () => {
    initializeDOMElements();
    initializeEventListeners();
    showMainMenu();
});