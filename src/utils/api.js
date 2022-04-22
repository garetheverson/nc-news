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

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles/?topic=${topic}`).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const updateArticleVotesById = (num, article_id) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: num })
    .then((result) => {
      return result;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};
