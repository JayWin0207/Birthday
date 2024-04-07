import {React} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';  
import './index.css';
import Birthday from './Birthday';
import FirstYear from './components/FirstYear';
import SecondYear from './components/SecondYear';
import ThirdYear from './components/ThirdYear';
import FourthYear from './components/FourthYear';
import FifthYear from './components/FifthYear';
import SixthYear from './components/SixthYear';
import SeventhYear from './components/SeventhYear';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Birthday/>}/>
      <Route exact path="/Year2018" element={<FirstYear/>}/>
      <Route exact path="/Year2019" element={<SecondYear/>}/>
      <Route exact path="/Year2020" element={<ThirdYear/>}/>
      <Route exact path="/Year2021" element={<FourthYear/>}/>
      <Route exact path="/Year2022" element={<FifthYear/>}/>
      <Route exact path="/Year2023" element={<SixthYear/>}/>
      <Route exact path="/Year2024" element={<SeventhYear/>}/>
    </Routes>
    </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
