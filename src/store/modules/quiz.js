import { api } from '../../api';
import { types } from '../types';

const {
  SET_CURRENT_CATEGORY,
  SET_IS_LOADING,
  SET_QUESTIONS,
  SET_DIFFICULTY,
  SET_AMOUNT,
  SET_QUESTION_INDEX,
} = types;

const allDifficulties = ['any', 'easy', 'medium', 'hard'];
const allAmounts = ['5', '10', '15'];

export const quiz = {
  state: {
    allDifficulties,
    allAmounts,
    questions: [],
    answers: [],
    currentCategory: null,
    amount: '10',
    difficulty: null,
    isLoading: false,
    currentQuestionIndex: 0,
  },
  getters: {
    currentQuestion: (state) => {
      return state.questions[state.currentQuestionIndex];
    },
  },
  mutations: {
    [SET_CURRENT_CATEGORY](state, payload) {
      state.currentCategory = payload;
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
        const { data } = await api.getQuestions({
          amount,
          difficulty,
          categoryId,
        });
        commit(SET_QUESTIONS, data.results);
        commit(SET_IS_LOADING, false);
      } catch (err) {
        commit(SET_IS_LOADING, false);
        console.log(err);
      }
    },
  },
  namespaced: true,
};
