import { createRouter, createWebHistory } from 'vue-router';
import Categories from '../components/Categories.vue';
import NotFound from '../components/NotFound.vue';
import Quiz from '../components/Quiz.vue';
import Options from '../components/Options.vue';
import Result from '../components/Result.vue';

const routes = [
  { path: '/', component: Categories },
  { path: '/result', component: Result },
  { path: '/options', component: Options },
  { path: '/quiz', component: Quiz },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({ routes, history: createWebHistory() });
