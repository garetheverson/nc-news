import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleTopic from './components/SingleTopic';
import Footer from './components/Footer';
import { getArticles } from './utils/api';

function App() {
  // --- ARTICLES ---
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi.articles);
    });
  }, []);

  // --- APP ---
  return (
    <div className='App'>
      {/* <Header /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Articles />}></Route>
        <Route
          path='/topics/:slug'
          element={<SingleTopic articles={articles} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
