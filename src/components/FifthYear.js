import '../components/FifthYear.css';
import { useEffect } from 'react';

function FifthYear() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div id='main'>
        <h1 id='fifth-wish'>Happy Happier Happiest Birthday!</h1>
        <div id='images'>
          <span id='fifth-image1'></span>
          <span id='fifth-image2'></span>
        </div>
        <p>It was 2022! <br></br></p>
        <p>Thank you for accepting my apology and me again. I never prove you wrong for believing in me once again</p>
        <div id='video'>
        <iframe id='fifthYearVideo' width="560" height="315" src="https://www.youtube.com/embed/e7s-V5Lzey0?si=ccycykgZLRQtXkcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
      </div>
      <div id='footer-div'>
        <footer id='footer'>Made with &#10084;</footer>
      </div>

    </div>
  );
}

export default FifthYear;
