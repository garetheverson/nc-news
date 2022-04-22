import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.articles);
    });
  }, []);

  return (
    <main>
      <ul className='article-list'>
        {articles.map((article) => {
          const date = new Date(article.created_at);
          const publishedDate = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`;
          return (
            <li key={article.article_id} className='shadow-lg'>
              <h4 className='featured-post'>Featured post</h4>
              <h4 className='previous-post'>Other posts</h4>
              <h2>{article.title}</h2>
              <p className='post-details'>
                Topic:{' '}
                {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
                {' / '}Author: {article.author}
                {' / '}Votes: {article.votes}
                {' / '}Published: {publishedDate}
              </p>
              <img
                src={`https://picsum.photos/id/${article.article_id}/400/200?blur=1`}
                alt={article.title}
              ></img>
              <Link to={`/articles/${article.article_id}`}>
                <button>Read more</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
