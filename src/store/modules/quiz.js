import { api } from '../../api';
import { types } from '../types';
import { shuffle, htmlEncode } from '../../utils';

const {
  SET_CURRENT_CATEGORY,
  SET_IS_LOADING,
  SET_QUESTIONS,
  SET_DIFFICULTY,
  SET_AMOUNT,
  SET_QUESTION_INDEX,
  SET_CURRENT_ANSWER,
  CLEAR_QUIZ_STATE,
} = types;

const allDifficulties = ['any', 'easy', 'medium', 'hard'];
const allAmounts = ['5', '10', '15'];

export const quiz = {
  state: {
    allDifficulties,
    allAmounts,
    questions: [],
    answers: [],
    currentCategory: { name: 'Any' },
    amount: '10',
    difficulty: null,
    isLoading: false,
    currentQuestionIndex: 0,
  },
  getters: {
    currentQuestion: (state) => {
      return state.questions[state.currentQuestionIndex];
    },
    getResults: (state) => {
      const correctAnswers = state.questions.reduce(
        (acc, { correct_answer }, ind) =>
          htmlEncode(correct_answer) === state.answers[ind] ? ++acc : acc,
        0
      );
      const totalAnswers = state.questions.length;
      return {
        correctAnswers,
        totalAnswers,
        percentCorrectAnswers: ((correctAnswers / totalAnswers) * 100).toFixed(
          1
        ),
      };
    },
  },
  mutations: {
    [SET_CURRENT_CATEGORY](state, payload) {
      state.currentCategory = payload;
    },
    [CLEAR_QUIZ_STATE](state) {
      state.currentQuestionIndex = 0;
      state.questions = [];
      state.answers = [];
    },
    [SET_QUESTION_INDEX](state, payload) {
      state.currentQuestionIndex = payload;
    },
    [SET_IS_LOADING](state, payload) {
      state.isLoading = payload;
    },
    [SET_QUESTIONS](state, payload) {
      state.questions = payload;
    },
    [SET_CURRENT_ANSWER](state, payload) {
      state.answers[state.currentQuestionIndex] = payload;
    },
    [SET_DIFFICULTY](state, payload) {
      if (payload === 'any') {
        state.difficulty = null;
      } else {
        state.difficulty = payload;
      }
    },
    [SET_AMOUNT](state, payload) {
      state.amount = payload;
    },
  },
  actions: {
    async fetchQuestions({
      commit,
      state: { amount, difficulty, currentCategory },
    }) {
      commit(SET_IS_LOADING, true);
      try {
        const categoryId = currentCategory && currentCategory.id;
        const {
          data: { results },
        } = await api.getQuestions({
          amount,
          difficulty,
          categoryId,
        });
        results.forEach((data) => {
          data.variants = shuffle([
            ...data.incorrect_answers,
            data.correct_answer,
          ]);
          data.correct_answer = htmlEncode(data.correct_answer);
          data.question = htmlEncode(data.question);
        });
        commit(SET_QUESTIONS, results);
        commit(SET_IS_LOADING, false);
      } catch (err) {
        commit(SET_IS_LOADING, false);
        console.log(err);
      }
    },
  },
  namespaced: true,
};
