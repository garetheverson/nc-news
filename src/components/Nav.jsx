import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      console.log(topicsFromApi.topics);
      setTopics(topicsFromApi.topics);
    });
  }, []);

  return (
    <nav className='header'>
      <Link to='/' className='home-button'>
        Readdis
      </Link>
      <ul>
        {topics.map((topic) => {
          return (
            <Link to={topic.slug} className='nav-topics'>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
