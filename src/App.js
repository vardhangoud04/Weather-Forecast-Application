import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import APi from './Components/APi';
import Temp from './Components/Temp';
function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path='/api' element={<APi />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Temp' element={<Temp />} />
      </Routes>

    </>
  );
};

export default App;
