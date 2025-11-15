import { elements } from './dom.js';
import { state, setQuestionIndex } from './state.js';
import { handleOptionClick } from './main.js';

function checkAnswer(question) {
    const userSelection = state.userAnswers[question.id];
    if (userSelection === undefined) return false;

    const correctOptions = question.multi 
        ? question.answer_set 
        : [question.answer];

    const userOptions = question.multi
        ? userSelection.map(index => question.options[index])
        : [question.options[userSelection]];

    if (question.multi) {
        const userCorrectCount = userOptions.filter(opt => correctOptions.includes(opt)).length;
        return userCorrectCount === correctOptions.length && userOptions.length === correctOptions.length;
    } else {
        return userOptions[0] === correctOptions[0];
    }
}

export function renderProgressBar() {
    elements.progressBar.innerHTML = '';
    state.quizData.forEach((q, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot mx-1 my-1 flex-shrink-0';
        dot.dataset.index = index;
        dot.title = `Question ${index + 1}`;
        
        if (index === state.currentQuestionIndex) {
            dot.classList.add('current');
        }

        const answers = state.userAnswers[q.id];
        if (answers !== undefined) {
            if (state.isSubmitted) {
                const isCorrect = checkAnswer(q);
                dot.classList.add(isCorrect ? 'answered' : 'incorrect-answered');
            } else {
                dot.classList.add('answered');
            }
        }

        dot.addEventListener('click', () => {
            setQuestionIndex(index);
            renderQuestion();
        });

        elements.progressBar.appendChild(dot);
    });
}

export function renderQuestion() {
    const q = state.quizData[state.currentQuestionIndex];
    
    elements.questionNumber.textContent = `Question ${state.currentQuestionIndex + 1} of ${state.quizData.length}`;
    elements.questionText.innerHTML = (q.type === 'tf' ? '(True/False) ' : (q.multi ? '(Multiple Select) ' : '(Single Select) ')) + q.question;
    elements.optionsContainer.innerHTML = '';
    elements.feedbackMessage.classList.add('hidden');

    const savedAnswerIndexes = state.userAnswers[q.id] || [];

    q.options.forEach((optionText, index) => {
        const isSelected = savedAnswerIndexes.includes(index);
        
        const button = document.createElement('button');
        button.className = 'option-button w-full flex items-center';
        if (isSelected) {
            button.classList.add('selected');
        }

        const iconHtml = q.multi 
            ? `<span class="icon">${isSelected ? '&#9745;' : '&#9744;'}</span>`
            : `<span class="icon">${isSelected ? '&#9900;' : '&#9711;'}</span>`;

        button.innerHTML = iconHtml + optionText;
        button.dataset.index = index;

        button.onclick = () => handleOptionClick(q, index);

        if (state.isSubmitted) {
            button.disabled = true;
            const isCorrectOption = q.multi 
                ? q.answer_set.includes(optionText)
                : q.answer === optionText;
            
            if (isCorrectOption) {
                button.classList.add('correct');
            } else if (isSelected) {
                button.classList.add('incorrect');
            }

            const isAnswerCorrect = checkAnswer(q);
            elements.feedbackMessage.innerHTML = `<span class="font-bold text-lg">${isAnswerCorrect ? '✅ Correct!' : '❌ Incorrect.'}</span><br>${q.explanation}`;
            elements.feedbackMessage.classList.remove('hidden');
            elements.feedbackMessage.classList.toggle('bg-green-100', isAnswerCorrect);
            elements.feedbackMessage.classList.toggle('text-green-800', isAnswerCorrect);
            elements.feedbackMessage.classList.toggle('bg-red-100', !isAnswerCorrect);
            elements.feedbackMessage.classList.toggle('text-red-800', !isAnswerCorrect);
            elements.feedbackMessage.classList.add('p-3', 'rounded-lg', 'mt-4');
        }
        
        elements.optionsContainer.appendChild(button);
    });

    updateNavigation();
    renderProgressBar();
}

export function updateNavigation() {
    elements.previousButton.disabled = state.currentQuestionIndex === 0;
    elements.nextButton.disabled = state.currentQuestionIndex === state.quizData.length - 1;

    if (state.currentQuestionIndex === state.quizData.length - 1 && !state.isSubmitted) {
        elements.nextButton.classList.add('hidden');
        elements.submitQuizButton.classList.remove('hidden');
    } else {
        elements.nextButton.classList.remove('hidden');
        elements.submitQuizButton.classList.add('hidden');
    }
}

export function showResults() {
    const totalQuestions = state.quizData.length;
    let score = 0;
    let breakdown = { correct: 0, incorrect: 0, unanswered: 0 };
    
    state.quizData.forEach(q => {
        if (state.userAnswers.hasOwnProperty(q.id)) {
            if (checkAnswer(q)) {
                score++;
                breakdown.correct++;
            } else {
                breakdown.incorrect++;
            }
        } else {
            breakdown.unanswered++;
        }
    });

    const percentage = ((score / totalQuestions) * 100).toFixed(1);

    elements.scoreText.innerHTML = `You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong> (${percentage}%)`;
    elements.scoreBreakdown.innerHTML = `
        <p class="text-green-600"><span class="font-bold">Correct:</span> ${breakdown.correct}</p>
        <p class="text-red-600"><span class="font-bold">Incorrect:</span> ${breakdown.incorrect}</p>
        <p class="text-gray-500"><span class="font-bold">Unanswered:</span> ${breakdown.unanswered}</p>
    `;

    elements.quizContent.classList.add('hidden');
    elements.quizFooter.classList.add('hidden');
    elements.resultsScreen.classList.remove('hidden');
}