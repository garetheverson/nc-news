import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ge-ncnews.herokuapp.com/api',
});

export const getArticles = () => {
  return api.get('/articles').then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return api.get('/topics').then(({ data }) => {
    return data;
  });
};
