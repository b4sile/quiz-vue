import { createStore, createLogger } from 'vuex';
import { categories } from './modules';

const debug = process.env.NODE_ENV !== 'production';

export const store = createStore({
  modules: {
    categories,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
