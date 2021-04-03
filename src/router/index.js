import { createRouter, createWebHistory } from 'vue-router';
import { Categories, NotFound } from '../components';

const routes = [
  { path: '/', component: Categories },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({ routes, history: createWebHistory() });
