import { useState, useEffect } from 'react';
import '../App.css';
import Votes from './Votes';
import { useParams, Link } from 'react-router-dom';
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
          Topic:{' '}
          <Link className='breadcrumb' to={`/${article.topic}`}>
            {article.topic}
          </Link>
          {' / '}Author: {article.author}
          {' / '}Published: {createdDate}
        </h6>
        <Votes votes={article.votes}></Votes>
        <img
          src={`https://picsum.photos/id/${article_id}/800/300?blur=1`}
          alt={article.title}
        ></img>
        <p className='article-body'>{article.body}</p>
      </article>
    </main>
  );
};

export default Article;
