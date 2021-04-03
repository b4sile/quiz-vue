import _axios from 'axios';

const url = 'https://opentdb.com';

const axios = _axios.create({
  baseURL: url,
  params: { token: localStorage.getItem('token') },
});

export const api = {
  getCategories: () =>
    Promise.all([
      axios.get('/api_category.php'),
      axios.get('/api_count_global.php'),
    ]),
  getQuestions: (categoryId, amount, difficulty) =>
    axios.get(
      `/api.php?category=${categoryId}&amount=${amount}&difficulty=${difficulty}`
    ),
};
