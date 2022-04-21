import { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { getArticlesByTopic } from '../utils/api';

const SingleTopic = ({ articles }) => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const params = useParams();
  useEffect(() => {
    getArticlesByTopic(params.slug).then((res) => {
      setArticlesByTopic(res.articles);
    });
  }, [params]);

  return (
    <main>
      <h1 className='topic-heading'>{params.slug}</h1>
      <ul className='article-list'>
        {articlesByTopic.map((article) => {
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
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleTopic;
