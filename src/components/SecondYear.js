import '../components/SecondYear.css';
import { useEffect } from 'react';

function SecondYear() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div id='second-main'>
        <h1 id='second-wish'>Happy Happier Happiest Birthday!</h1>
        <div id='second-images'>
          <span id='second-image1'></span>
          <span id='second-image2'></span>
        </div>
        <p>It was 2019!</p>
        <p>You were not there in place where i was to celebrate/wish you directly</p>
        <p>I was waiting for your return to see you</p>
        <div id='video'>
        <iframe id='secondYearVideo' width="560" height="315" src="https://www.youtube.com/embed/7-vgGsKzYbA?si=vzkjyo0UXoMFg7e5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
      </div>
      <div id='footer-div'>
        <footer id='footer'>Made with &#10084;</footer>
      </div>

    </div>
  );
}

export default SecondYear;
