import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
    });
  }, []);
  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
