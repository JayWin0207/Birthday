import { useNavigate } from 'react-router-dom';
import './Birthday.css';
import '../src/Birthday.scss'
import DOB from './DOB.js';
import { useEffect, useState } from 'react';

function Birthday() {
  const navigate=useNavigate();

  
  
  return (
    <div>    
      <DOB/>
      <div id="container" className="parent-class">
        <div id="image"></div>
        <div className="platform">
          <div className="plate"></div>
          <div className="plate"></div>
          <div className="panels">
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel"></div>
          </div>
        </div>
      </div>
      <div id='birthday-line'>7 wonders in the world and it's your 7th Birthday!</div>
      <div id="buttons">
          <button id="Year2018" className="button-class" onClick={()=>{navigate('/Year2018')}}>2018</button>
          <button id="Year2019" className="button-class" onClick={()=>{navigate('/Year2019')}}>2019</button>
          <button id="Year2020" className="button-class" onClick={()=>{navigate('/Year2020')}}>2020</button>
          <button id="Year2021" className="button-class" onClick={()=>{navigate('/Year2021')}}>2021</button>
          <button id="Year2022" className="button-class" onClick={()=>{navigate('/Year2022')}}>2022</button>
          <button id="Year2023" className="button-class" onClick={()=>{navigate('/Year2023')}}>2023</button>
          <button id="Year2024" className="button-class" onClick={()=>{navigate('/Year2024')}}>2024</button>
      </div>
      <div id='footer-div'>
      <footer id='footer'>Made with &#10084;</footer>
      </div>
      
      </div>
  );
}

export default Birthday;
