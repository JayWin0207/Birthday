import '../components/FirstYear.css';
import { useEffect } from 'react';

function FirstYear() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div id='main'>
        <h1 id='first-wish'>Happy Happier Happiest Birthday!</h1>
        <div id='images'>
          <span id='first-image1'></span>
          <span id='first-image2'></span>
        </div>
        <p>It was 2018! <br></br></p>
        <p>We met unknowingly one day</p>
        <p>We were new to each other and I did not get a chance to wish you heartfully</p>
        <div id='video'>
          <iframe id='firstYearVideo' width="560" height="315"
            src="https://www.youtube.com/embed/F3Td3_c96vo?si=tdKAdbwMeE9i3jSD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
      </div>
      <div id='footer-div'>
        <footer id='footer'>Made with &#10084;</footer>
      </div>

    </div>
  );
}

export default FirstYear;
