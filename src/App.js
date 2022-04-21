import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleTopic from './components/SingleTopic';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Articles />}></Route>
        <Route path='/:slug' element={<SingleTopic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
