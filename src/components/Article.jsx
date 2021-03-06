import { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import { publishedDate } from '../utils/helpers';

const Article = () => {
  const [article, setArticleById] = useState([]);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        console.log(res.article, 'res');
        setArticleById(res.article);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  }, [article_id]);

  if (err) {
    return (
      <main>
        <p>{err}</p>
      </main>
    );
  }

  const createdDate = publishedDate(article.created_at);

  return (
    <main>
      <article className='shadow-lg'>
        <h2>{article.title}</h2>
        <h6 className='post-details'>
          Topic: {article.topic}
          {' / '}Author: {article.author}
          {' / '}Votes: {article.votes}
          {' / '}Published: {createdDate}
        </h6>
        <img
          src={`https://picsum.photos/id/${article.article_id}/800/300?blur=1`}
          alt={article.title}
        ></img>
        <p>{article.body}</p>
      </article>
    </main>
  );
};

export default Article;
