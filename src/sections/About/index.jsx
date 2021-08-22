import React from 'react'
import "./styles.scss";
import myPic from "../../assets/images/me.jpg";

function About() {
    return (
        <div className="about-container" id="about">
           <div className="about-container-inner">
               <div className="about-block left-info-section">
                   <div className="picture">
                       <img src={myPic} alt="varaprasadh looking left"/>
                   </div>
                   <div className="bio-container">
                       <div className="bio-inner">
                           <div className="name">
                               <div className="name-inner">Varaprasadh Alajangi</div>
                           </div>
                           <div className="bio-content">
                               <div className="bio-content-inner">
                                   👋 Hi, I'm Fullstack Engineer, Learning something new day by day.
                                   passionate about <strong>Technology</strong> since childhood, grown up watching 
                                  &nbsp;<strong>SCI-FI Movies and Cartoons.</strong> 
                                  <br/>
                                  <br/>
                                  <strong>Internet is my university 🏫</strong> <br/>
                                  Time never waits, and i too, i will do <strong>google</strong> or <strong>Stackoverflow</strong> 
                                  <br/>
                                  I used to do small freelance project when i was in college final year. in that process,i learned so many things, best practices, clean code ..etc <br/>
                                  i understood <strong>how not to do!</strong> is more important than <strong>how to do!</strong> 
                                  <br/>
                                  <br/>
                                  <strong> 🚦 Greatness is coming...</strong>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

           </div>
        </div>
    )
}

export default About;
