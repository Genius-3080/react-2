
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
import sun from './img/light.png'

function App() {
const [mode, setMode ]= useState(true)
console.log(mode);
  return (
    
    <div className="App">
 <header className={mode ? 'darker' : 'sunner'}>
      <div class="container">
        <div class="heading">
          <img onClick={()=> setMode(!mode)} class="icon" src={mode ? icon : sun} alt="" />
          <div class="profile__box">
            <img src={profilePic} alt="" />
            <div class="text__header__box">
              <h1 className={mode ? 'header__text' : 'header__text sunner'}>Victor Alvarado</h1>
              <p className={mode ? 'header__subtitle' : 'header__subtitle sunner'}>Software Engineer</p>
       
           
       
         
              <ul class="icon__pack">
                <a href="#"><i className={mode ? 'bx bxl-github' : 'bx bxl-github sunner'}></i> </a>
                <a href="#"><i className={mode ? 'bx bxl-twitter' : 'bx bxl-twitter sunner'}></i></a>
                <a href="#"><i className={mode ? 'bx bxl-linkedin-square' : 'bx bxl-linkedin-square sunner'}></i></a>
                <a href="#"><i className={mode ? 'bx bxl-youtube' : 'bx bxl-youtube sunner'}></i></a>
              </ul>
            </div>
          </div>
       
          <div class="statics__box">
            <div className={mode ? 'stat__1 stats' : 'stat__1 stats sunner'}>
              7 <br />Years of work <br />
              experience
            </div>
            <div className={mode ? 'stat__2 stats' : 'stat__2 stats sunner'}>
              50+<br />Completed <br />
              projects
            </div>
            <div className={mode ? 'stat__3 stats' : 'stat__3 stats sunner'}>
              20+<br />Satisfied <br />
              customers
            </div>
          </div>
          <div class="btn__box">
            <button class="btn__1">
              Download CV <i class="bx bxs-download"></i>
            </button>
            <button className={mode ? 'btn__2' : 'btn__2 shadower'}>Contact me</button>
          </div>
          <div className={mode ? 'section__box' : 'section__box shadower'}>
            <button className={mode ? 'secbtn__1' : 'secbtn__1 grayer'}>Portfolio</button>
            <button className={mode ? 'secbtn__2' : 'secbtn__2 shadower'}>Skills</button>
          </div>
          <div class="image__box">
           <img src={poster1} alt="" />
           <img src={poster2} alt="" />
           <img src={poster3} alt="" />
           <img src={poster4} alt="" />
           <img src={poster5} alt="" />
           <img src={poster6} alt="" />
          </div>
          <h2 className={mode ? 'footer__text' : 'footer__text sunner'}>
            © Victor Alvarado. 2022 All rigths reserved
          </h2>
        </div>
      </div>
    </header>
    </div>);
}

export default App;


