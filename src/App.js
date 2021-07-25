/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, createRef, useState} from 'react';
import './App.scss';
import GSAP, { Power3 } from "gsap"
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import SectionTitle from './components/SectionTitle.jsx';
import { SiGooglechrome, SiMedium, SiReact } from 'react-icons/si';
import Projects from './sections/Projects';
import doge from "./assets/images/doge.png";


const resume = {
  v1: "https://drive.google.com/file/d/1Zq4KWFymRa8sGOVAK0gXCyWDwUQ6NSjC/view?usp=sharing",
  v2: "https://drive.google.com/file/d/1gB1b09IXolQmY9QuVk2ntMnDyoXCmeQq/view?usp=sharing",
  v3: "https://drive.google.com/file/d/1IkJKxmY__z95Q5uX-NWVgMTvnJAs8GII/view?usp=sharing",
  v4: "https://drive.google.com/file/d/14ol6AFL8GaC6ffrQjzL2Tv39G7To42yH/view?usp=sharing"
};

function Home(){

  // refs
  let home = createRef();
  let title = createRef();
  let info = createRef();
  let button1 = createRef();
  let button2 = createRef();
  
  const timeline = GSAP.timeline();
  

  useEffect(() => {
    GSAP.to(home.current,  {css: {visibility: 'visible'}, duration: 0});
    
    timeline
    .from(title.current, {y: 150, ease: Power3.easeOut, duration:1.2})
    .from(info.current, {y: 100, ease: Power3.easeOut, duration:1.2},0.2)

    timeline.from(
      [button1.current, button2.current], 
      { opacity:0, 
        y: 10, 
        ease:Power3.easeOut,
        delay:0, 
        stagger: { 
          amount: 0.5,
        },

      },
      0.8
    );

    return () => {
      // leave this for now
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [timeline]);

  return (
    <section className="home" ref={home}>
      <div className="title-section">
        <div className="title">
          <div className="title-inner" ref={title}>Varaprasadh</div>
        </div>
        <div className="info" aria-label="information">
            <div className="info-inner" ref={info}>
                Fullstack Engineer, <br /> I Make WEB Apps | Browser Extensions.
            </div>
        </div>
        <div className="buttons">
          <a href="#about" ref={button1} aria-label="know more" className="button more">Know More</a>
          <a
            target="_blank" rel="noopener noreferrer"
            href={resume.v4}
            ref={button2} aria-label="view cv" className="button cv">View CV</a>
        </div>
      </div>
    </section>
  )
};


function NavMenuIcon(){
  // refs
  const line1 = createRef();
  const line2 = createRef();
  const line3 = createRef();

  const box1 = createRef();
  const box2 = createRef();
  const box3 = createRef();
  
  const menuContainer = createRef();

  const menuOption1 = createRef();
  const menuOption2 = createRef();
  const menuOption3 = createRef();
  const menuOption4 = createRef();
  const menuOption5 = createRef();
  

  const [open, setOpen] = useState(false);

  const timeline = useRef();
  useEffect(()=>{
    timeline.current =  GSAP.timeline({ paused: true})
        .to([line1.current], { y: 10, duration: 0.25 })
        .to([line3.current], { y: -10, duration: 0.25 }, 0)
        .to([line1.current], { rotate: 45, duration: 0.25 })
        .to([line3.current], { rotate: -45, duration: 0.5 },0.25)
        .to(line2.current, { opacity: 0, duration: .25 }, 0.2)
        .to(menuContainer.current, {css: {display:"block"}, duration: 0 })
        .from([box1.current, box2.current,box3.current], { 
          y:-1000,
          ease:Power3.easeOut,
          delay:0.5, 
          stagger: { 
            amount: 0.5,
          },
        }, 0.25)
        .from([menuOption1.current, menuOption2.current, menuOption3.current, menuOption4.current, menuOption5.current],
          {
            x:-300,
            ease:Power3.easeOut,
            delay:0.25, 
            stagger: { 
              amount: 0.25,
            },
          }, 1.0)
  }, [])

  useEffect(()=>{
      if(open){
        timeline.current.play()
      }else{
        timeline.current.reverse();
      }
  }, [open]);

  function handleClick(e){
    const { link, router } = e.target.dataset;
    timeline.current.reverse();
    if(router){
      // push react router
    }else{
      window.location.hash = `#${link}`;
      const element=document.getElementById(link);
      if(element){
        element.scrollIntoView();
      }
    }
  }

  return (
    <>
      <div className="nav-menu" onClick={()=>setOpen(open=>!open)}>
        <div ref={line1} className="menu-line one"></div>
        <div ref={line2} className="menu-line two"></div>
        <div ref={line3} className="menu-line three"></div>
      </div>
      <div className="menu-container" ref={menuContainer}>
        <div className="background-staggered">
          <div ref={box1} className="box one"></div>
          <div ref={box2} className="box two"></div>
          <div ref={box3} className="box three"></div>
          <div className="menu-options-container">
            <div className="menu-options">
              <div className="menu-option" >
                <div data-link="about" onClick={handleClick} className="menu-option-inner" ref={menuOption1}>About</div>
              </div>
              <div className="menu-option" >
                <div data-link="projects" onClick={handleClick} className="menu-option-inner" ref={menuOption2}>Projects</div>
              </div>
              <div className="menu-option" >
                <div data-link="skills" onClick={handleClick} className="menu-option-inner" ref={menuOption3}>Skills</div>
              </div>
              <div className="menu-option" >
                <div data-link="blogs" onClick={handleClick} className="menu-option-inner" ref={menuOption4}>Blogs</div>
              </div>
              <div className="menu-option" >
                <div data-link="contact" onClick={handleClick} className="menu-option-inner" ref={menuOption5}>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
};

const blogs = [
  {
    title: "Let’s Build A Chrome Extension That Shows Customized New Tab Page.",
    link:"https://varaprasadh.medium.com/lets-build-a-chrome-extension-that-shows-customized-new-tab-page-5414e317f2b8",
    icon: <SiGooglechrome size={30}/>
  },
  {
    title: "Build your chrome extension with react, typescript using webpack",
    link:"https://varaprasadh.medium.com/build-your-chrome-extension-with-react-typescript-using-webpack-5d5574084dff",
     icon: <SiGooglechrome size={30}/>
  },
  {
    title: "Build Reactive UI with Plain Javascript",
    link:"https://varaprasadh.medium.com/build-reactive-ui-with-plain-javascript-180085998756",
    icon: <SiReact size={30}/>
  }
]

function Blogs(){
  return (
    <div className="blogs-container" id="blogs">
      <div className="blogs-container-inner">
        <SectionTitle title="Blogs" icon={<SiMedium size={30}/>}></SectionTitle>
        <div className="blogs-wrapper">
         {
           blogs.map(({ title, link , icon})=>(
             <a key={title} href={link} className="blog-wrapper" target="_blank" rel="noopener noreferrer">
                <div className="blog-wrapper-inner">
                  <div className="blog-cover-image">
                    {icon}
                  </div>
                  <div className="blog-title">{title}</div>
                </div>
              </a>
           ))
         }
        </div>
      </div>
    </div>
  )
}

function Footer(){
  return (
      <div className="footer">
        <div className="footer-inner">
            <div className="footer-copyright">
              <div className="dot"></div>
              <div className="ftr-text">varaprasadh.dev  © 2021</div> 
              <div className="dot"></div>
            </div>
          </div>
      </div>
  )
}
function App() {
  return (
    <div className="App">
      <NavMenuIcon/>
      <Home/> 
      <About/>
      <Projects/>
      <Skills/> 
      <Blogs/>
      <Contact/> 
      <div className="thanks-section">
        <div className="centered-div">
          <div className="doge-image-container">
            <img src={doge} alt="doge"/>
          </div>
          <div className="message">Thanks for visiting the site</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
