import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      console.log(articlesFromApi.articles);
      setArticles(articlesFromApi.articles);
    });
  }, []);
  return (
    <main>
      <ul>
        {articles.map((article) => {
          // const publishedDate = Date.prototype.toDateString(article.created_at);
          const date = new Date(article.created_at);
          const publishedDate = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`;
          return (
            <li key={article.article_id}>
              <h3 className='featured-post'>Most recent article</h3>
              <h3 className='previous-post'>Previous articles</h3>
              <h2>{article.title}</h2>
              <p className='post-details'>
                Topic:{' '}
                {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
              </p>
              <p className='post-details'>Author: {article.author}</p>
              <p className='post-details'>Votes: {article.votes}</p>
              <p className='post-details'>Published: {publishedDate}</p>
              <img
                src={`https://picsum.photos/id/${article.article_id}/400/200?blur=1`}
                alt={article.title}
              ></img>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
