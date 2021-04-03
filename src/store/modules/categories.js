import { api } from '../../api';

const SET_CATEGORIES = 'setCategories';
const SET_IS_LOADING = 'setIsLoading';

export const categories = {
  state: {
    categories: [],
    isLoading: false,
  },
  mutations: {
    [SET_CATEGORIES](state, payload) {
      state.categories = payload;
    },
    [SET_IS_LOADING](state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit(SET_IS_LOADING, true);
      try {
        const [
          {
            data: { trivia_categories },
          },
          {
            data: { categories },
          },
        ] = await api.getCategories();
        commit(
          SET_CATEGORIES,
          trivia_categories.map(({ id, name }) => ({
            id,
            name,
            ...categories[id],
          }))
        );
        commit(SET_IS_LOADING, false);
      } catch (err) {
        commit(SET_IS_LOADING, false);
        console.log(err);
      }
    },
  },
  namespaced: true,
};
