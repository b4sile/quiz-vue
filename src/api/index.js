import _axios from 'axios';
import { getToken, setToken } from '../utils';

const url = 'https://opentdb.com';

const axios = _axios.create({
  baseURL: url,
  params: { token: getToken('token') },
});

export const api = {
  getCategories: () =>
    Promise.all([
      axios.get('/api_category.php'),
      axios.get('/api_count_global.php'),
    ]),
  getQuestions: ({ categoryId, amount, difficulty }) =>
    axios.get(`/api.php`, {
      params: {
        category: categoryId,
        amount,
        difficulty,
        token: getToken('token'),
      },
    }),
  getToken: () =>
    axios
      .get('/api_token.php?command=request')
      .then(({ data: { token } }) =>
        setToken('token', token, 1000 * 60 * 60 * 6)
      )
      .catch((err) => console.log(err)),
};
