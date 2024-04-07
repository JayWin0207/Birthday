import '../components/SixthYear.css';
import { useEffect } from 'react';

function SixthYear() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div id='main'>
        <h1 id='sixth-wish'>Happy Happier Happiest Birthday!</h1>
        <div id='images'>
          <span id='sixth-image1'></span>
          <span id='sixth-image2'></span>
        </div>
        <p>It was 2023! <br></br></p>
        <p id='side-wish'>Here is how i wished you in 2023</p>
        <p>Finally the day has just arrived for which i have been waiting for days. It's your day Loose! Many more happy returns of the day 😀. I always have a privilege to say that you are a very pure soul i have ever met. I dont know anything about our past lives but i am sure that we might have a very strong relation in the past life that made us to stick strong again in this life. I never wished for any one to stay in my life like i did for you. Please dont ask me why? I dont have an answer.

You had a special place in my heart
You have a special place in my heart
You will always have a special place in my heart and i mean it.

Everyone says that if you have a strong hope then that will happen for sure.

And as they said, i had a strong hope and that happened.(you know what it was)

I am short of words to wish you on your day because even if i  put all 26 alphabets together, i could not find a better sentence that matches the care i have for you.
<br></br>
Stay happy! Stay healthy! Even if you are not, i will make you don't worry.</p>
<p>Time united us again.Hence, I gifted you the same for this birthday</p>
        <div id='video'>
        <iframe id='sixthYearVideo' width="560" height="315" src="https://www.youtube.com/embed/8I9v8yaaknM?si=icRGSokaqLoxBslx&start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=''></iframe>
        </div>
      </div>
      <div id='footer-div'>
        <footer id='footer'>Made with &#10084;</footer>
      </div>

    </div>
  );
}

export default SixthYear;
