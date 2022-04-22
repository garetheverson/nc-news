import { useState } from 'react';
import { updateArticleVotesById } from '../utils/api';
import { useParams } from 'react-router-dom';

const Votes = ({ article, votes }) => {
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const [votesState, setVoteState] = useState(0);
  const { article_id } = useParams();

  return (
    <div className='votes'>
      <h6>Votes: {votesState + votes}</h6>
      <button
        className='upvote-button'
        disabled={upVoted}
        onClick={() => {
          updateArticleVotesById(1, article_id);
          setVoteState(1);
          setUpVoted(true);
        }}
      >
        Upvote article
      </button>
      <button
        className='downvote-button'
        disabled={downVoted}
        onClick={() => {
          updateArticleVotesById(-1, article_id);
          setVoteState(-1);
          setDownVoted(true);
        }}
      >
        Downvote article
      </button>
    </div>
  );
};

export default Votes;
