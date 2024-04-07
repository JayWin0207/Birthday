import '../components/SeventhYear.css';
import { useEffect } from 'react';

function SeventhYear() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div id='main'>
        <h1 id='seventh-wish'>Happy Happier Happiest Birthday!</h1>
        <div id='images'>
          <span id='seventh-image1'></span>
          <span id='seventh-image2'></span>
        </div>
        <p>It is 2024!<br></br></p>
        <p id='side-wish'>It is your 7th birthday with me Loose! First time, i am speechless. I can not believe that it's been 7 years since we are together and many more to come. All i can say is I hate You.I always wish you happiness and JAY in abundance.😁</p>
        <div id='video'>
        <iframe id='seventhYearVideo' width="560" height="315" src="https://www.youtube.com/embed/J7EKIcPkbeo?si=dtacN_z9YKn7CZqC&amp;start=1660" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
        <div id='seventh-wish2'>Once again Many more happy returns of the day my dearest Looooooooooooosssseeeeeee!</div>
        <div id='video'>
        <iframe id='seventhYearVideo' width="560" height="315" src="https://www.youtube.com/embed/Q0W6wcio384?si=k_xDxSwOTsn-atgr&start=263" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
      </div>
      <div id='footer-div'>
        <footer id='footer'>Made with &#10084;</footer>
      </div>

    </div>
  );
}

export default SeventhYear;
