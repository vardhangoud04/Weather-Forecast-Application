import React, { useState } from 'react'
import logo from '../logo.gif'
import APi from './APi'
// import background from '../background.jpeg'
import Home from './Home'
import Temp from './Temp'
function Header() {
  const [popup, setPopup] = useState(false);
  const [model, setModel] = useState(false);
  const [temperature, setTemperature] = useState(false);
  function weatherSubmit(e) {
    e.preventDefault();
    setPopup(false);
    setModel(false);
    setTemperature(false);
  };
  function homeSubmit(e) {
    e.preventDefault();
    setPopup(true);
    setModel(false);
    setTemperature(false);
  };
  function GetSubmit(e) {
    e.preventDefault();
    setModel(true);
    setPopup(false);
    setTemperature(false);
  };

  const TemperatureSumit = (e) => {
    e.preventDefault();
    setPopup(false);
    setModel(false);
    setTemperature(true);
  };

  const HomepageSubmit = (e) => {
    e.preventDefault();
    setPopup(false);
    setModel(false);
    setTemperature(false);
  };
  return (
    <>
      <div className='header'>
        <nav>
          <ul className='nav-buttons'>
            <img onClick={HomepageSubmit} className='cloud-img' src={logo} alt="cloud item" />
            <li className='list-dot' ><a onClick={weatherSubmit} id='list-item1' href="./Header.js">Weather Forecast App</a></li>
            <li className='list-dot' ><a onClick={homeSubmit} id='list-item2' href="./Home">Home</a></li>
            <li className='list-dot' ><a onClick={GetSubmit} id='list-item3' href='./Api'>Get Weather</a></li>
            <li className='list-dot' ><a onClick={TemperatureSumit} id='list-item4' href="./Temp">Temperature Converter</a></li>

          </ul>
        </nav>

      </div>

      <div className='body'>
        <div className='child-body'>
          <Home show={popup}></Home>
          <APi visible={model}></APi>
          <Temp showpop={temperature} />
        </div>
        {/* <img className='image-file' src= {background} alt=""  /> */}



      </div>

    </>
  )
}

export default Header
