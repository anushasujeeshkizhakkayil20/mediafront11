
import './App.css';
import LandingPage1 from './pages/LandingPage1';
import Home from './pages/Home';

import WatchHistory from './pages/WatchHistory';
import { Route, Routes } from 'react-router-dom';
import Header from './componebts/Header';
import Footer from './componebts/Footer';

function App() {
  return (
    <div >
      <Header/>
     <Routes>
      <Route path='/' element={<LandingPage1/>}/>
      <Route path='/home'element={ <Home/> }/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
