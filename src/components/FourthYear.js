import '../components/FourthYear.css';
import { useEffect } from 'react';

function FourthYear() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div id='main'>
        <h1 id='fourth-wish'>Happy Happier Happiest Birthday!</h1>
        <div id='images'>
          <span id='fourth-image1'></span>
          <span id='fourth-image2'></span>
        </div>
        <p>It was 2021! <br></br></p>
        <p>Better I should talk as less as possible about this that will not spoil our occasion now.</p>
        <div id='video'>
        <iframe id='FourthYearVideo' width="560" height="315" src="https://www.youtube.com/embed/K_z6jNNDhOI?si=awnFD1LpWU5jrav_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
      </div>
      <div id='footer-div'>
        <footer id='footer'>Made with &#10084;</footer>
      </div>

    </div>
  );
}

export default FourthYear;
