import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://ge-ncnews.herokuapp.com/api',
});

export const getArticles = () => {
  return articlesApi.get('/articles').then(({ data }) => {
    return data;
  });
};
