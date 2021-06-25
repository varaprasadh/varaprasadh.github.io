import React, { useEffect } from 'react'
import GSAP, { Power3 } from "gsap"
import scrollTrigger from "gsap/ScrollTrigger"

import SectionTitle from '../../components/SectionTitle.jsx';

import "./styles.scss";

import { BiGlasses  } from "react-icons/bi";
import { AiFillChrome } from "react-icons/ai";
import { FaReact, FaNodeJs  } from "react-icons/fa";
import { 
        SiTypescript, 
        SiMongodb, 
        SiPostgresql, 
        SiVueDotJs, 
        SiApollographql,
        SiReactos,
        SiGit,
        SiJest,
        SiWebpack,
        SiDocker,
        SiWebmoney,
        SiMozillafirefox,
        SiHeroku,
        SiCloudcannon,
        SiGithubactions,
        SiCss3,
        SiJavascript,
        SiHtml5,
        SiWebgl,
        SiTravisci
    } from "react-icons/si";


GSAP.registerPlugin(scrollTrigger);

const skills = {
    Frontend:[
        {
            title: "React",
            icon: <FaReact size={32}/>,
            categories: ['Frontend']
        },
        {
            title: "Typescript",
            icon: <SiTypescript size={32}/>
        },
        {
            title: "Vue.Js",
            icon: <SiVueDotJs size={32}/>
        },
        {
            title: "React Native",
            icon: <SiReactos size={32}/>
        },
        {
            title: "ES6 +",
            icon: <SiJavascript size={32}/>
        },
        {
            title: "CSS, SCSS, *",
            icon: <SiCss3 size={32}/>
        },
        {
            title: "HTML",
            icon: <SiHtml5 size={32}/>
        },
        {
            title: "WebGL, Threejs",
            icon: <SiWebgl size={32}/>
        },
        {
            title: "Browser Extensions",
            icon:   <AiFillChrome size={32}/>,
            categories: ['Frontend']
        },
    ],
    Backend: [
        {
            title: "Node.Js",
            icon: <FaNodeJs size={32}/>
        },
        {
            title: "GraphQL",
            icon: <SiApollographql size={32}/>
        },
        {
            title: "Express.js",
            icon: <SiTravisci size={32}/>
        },
    ],
    Databases: [
        {
            title: "MongoDB",
            icon: <SiMongodb size={32}/>
        },
        {
            title: "Postgresql",
            icon: <SiPostgresql size={32}/>
        },
    ],
    Testing: [
        {
            title: "Jest",
            icon: <SiJest size={32}/>
        },
        {
            title: "Puppeteer",
            icon: <SiMozillafirefox size={32}/>
        },
    ],
    Tooling: [
        {
            title: "Git",
            icon: <SiGit size={32}/>
        },
        {
            title: "Webpack",
            icon: <SiWebpack size={32}/>
        },
        {
            title: "Docker",
            icon: <SiDocker size={32}/>
        },
        {
            title: "Web Scrapping",
            icon: <SiWebmoney size={32}/>
        },
    ],
    "Cloud Services": [
        {
            title: "Heroku",
            icon: <SiHeroku size={32}/>
        },
        {
            title: "Github Actions",
            icon: <SiGithubactions size={32}/>
        },
        {
            title: "Cloudinary",
            icon: <SiCloudcannon size={32}/>
        }
    ]
}

   
function Skills() {
    
    useEffect(()=>{
        

        const subSections = document.querySelectorAll(".skills-sub-section");
        subSections.forEach(subSection => {

            const skillCards = subSection.querySelectorAll(".skill-container");
            GSAP.from(skillCards, {
                opacity : 0,
                scrollTrigger: {
                    trigger: subSection,
                    start:"20px 90%",
                    toggleActions: "play none none none",
                },  
                ease:Power3.easeOut,
                delay: 0.5,
                stagger: {
                    amount: 0.8
                }
            }, 0)
            GSAP.from(subSection.querySelector(".skills-sub-section-title-inner"),{
                x: -100,
                duration: 0.5,
                scrollTrigger: {
                    trigger: subSection,
                    start:"20px 90%",
                    toggleActions: "play none none none",
                },
            })
            
        })


    },[]);
    return (
        <div className="skills-container" id="skills">
        <div className="skills-container-inner">
           <SectionTitle style={{fontSize:"40px"}} title="Skills" icon={<BiGlasses/>}></SectionTitle>
            
                {
                    Object.entries(skills).map(([ category, items ])=>(
                        <div className="skills-sub-section" key={category}>
                            <div className="skills-sub-section-title">
                                <div className="skills-sub-section-title-inner">
                                    <SectionTitle title={category}></SectionTitle>
                                </div>
                            </div>
                            <div className="skills-wrapper">
                                {
                                items.map(({title, icon  })=>(
                                    <div className="skill-container" key={title}>
                                        <div className="skill-icon">{icon}</div>
                                        <div className="skill-title">{title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;