
import './App.css';
import poster1 from './img/poster-1.png'
import poster2 from './img/poster-2.png'
import poster3 from './img/poster-3.png'
import poster4 from './img/poster-4.png'
import poster5 from './img/poster-5.png'
import poster6 from './img/poster-6.png'
import icon from './img/dark.png'
import profilePic from './img/profile image.png'
import { useState } from 'react';

function App() {

  return (
    
    <div className="App">
 <header>
      <div class="container">
        <div class="heading">
          <img class="icon" src={icon} alt="" />
          <div class="profile__box">
            <img src={profilePic} alt="" />
            <div class="text__header__box">
              <h1 class="header__text">Victor Alvarado</h1>
              <p class="header__subtitle">Software Engineer</p>
              <ul class="icon__pack">
                <a href="#"> <i class="bx bxl-github"></i> </a>
                <a href="#"> <i class="bx bxl-twitter"></i></a>
                <a href="#"><i class="bx bxl-linkedin-square"></i></a>
                <a href="#"><i class="bx bxl-youtube"></i></a>
              </ul>
            </div>
          </div>
          <div class="statics__box">
            <div class="stat__1 stats">
              7 <br />Years of work <br />
              experience
            </div>
            <div class="stat__2 stats">
              50+<br />Completed <br />
              projects
            </div>
            <div class="stat__3 stats">
              20+<br />Satisfied <br />
              customers
            </div>
          </div>
          <div class="btn__box">
            <button class="btn__1">
              Download CV <i class="bx bxs-download"></i>
            </button>
            <button class="btn__2">Contact me</button>
          </div>
          <div class="section__box">
            <button class="secbtn__1">Portfolio</button>
            <button class="secbtn__2">Skills</button>
          </div>
          <div class="image__box">
           <img src={poster1} alt="" />
           <img src={poster2} alt="" />
           <img src={poster3} alt="" />
           <img src={poster4} alt="" />
           <img src={poster5} alt="" />
           <img src={poster6} alt="" />
          </div>
          <h2 class="footer__text">
            © Victor Alvarado. 2022 All rigths reserved
          </h2>
        </div>
      </div>
    </header>

      





    </div>);
}

export default App;


