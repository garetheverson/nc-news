import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleTopic from './components/SingleTopic';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Articles />}></Route>
        <Route path='/:slug' element={<SingleTopic />} />
        <Route path='/articles/:article_id' element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
