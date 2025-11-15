export const state = {
    currentQuestionIndex: 0,
    userAnswers: {}, // { id: [selectedOptionIndex(es)], ... }
    isSubmitted: false,
    quizData: [],
};

export function setQuizData(data) {
    state.quizData = data;
}

export function resetState() {
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.isSubmitted = false;
    // We don't reset quizData here, as it's set when a quiz is chosen.
}

export function setQuestionIndex(index) {
    state.currentQuestionIndex = index;
}