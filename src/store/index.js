import { createStore, createLogger } from 'vuex';
import { categories, quiz } from './modules';
export { types } from './types';

const debug = process.env.NODE_ENV !== 'production';

export const store = createStore({
  modules: {
    categories,
    quiz,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
