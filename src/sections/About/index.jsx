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
                                    Hi! I'm a self-taught software engineer. <br/>
                                    I love to learn about internals of systems and build them.
                                    <ul>
                                        <li>
                                            <h3>what i do/did,</h3>
                                            <ul>
                                                <li>Built mobile/desktop/web apps, browser extensions, ...more, </li>
                                                <li>working as Software Engineer at <i>Imaginnovate</i></li>
                                                <li>freelanced in the past.</li>
                                                <li>watches anime in the free time.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h3>my key take away(s)</h3>
                                            <ul>
                                                <li>I say language is not barrier unless it changes <strong>semantics of syntax.</strong></li>
                                                <li>best way to get started is 'get started'</li>
                                                <li>never wait for someone to teach you</li>
                                            </ul>
                                        </li>
                                    </ul>
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
