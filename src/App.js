import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Articles />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
