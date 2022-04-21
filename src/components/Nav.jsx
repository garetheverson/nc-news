import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
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
            <li key={topic.slug} className='nav-topics'>
              <Link to={`/${topic.slug}`}>
                {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
