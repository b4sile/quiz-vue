import { createRouter, createWebHistory } from 'vue-router';
import { Categories, NotFound, Quiz, Options } from '../components';

const routes = [
  { path: '/', component: Categories },
  { path: '/options', component: Options },
  { path: '/quiz', component: Quiz },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({ routes, history: createWebHistory() });
