import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='header'>
      <Link to='/'>Home | </Link>
      <Link to='/cooking'>Cooking | </Link>
      <Link to='/coding'>Coding | </Link>
      <Link to='/football'>Football</Link>
    </nav>
  );
};

export default Nav;
