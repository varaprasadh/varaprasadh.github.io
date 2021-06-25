import React from 'react'
import { SiGithub } from 'react-icons/si';
import SectionTitle from '../../components/SectionTitle.jsx';
import "./styles.scss";

import alienbook  from "./images/alienbook_cover.png";
import cursors  from "./images/cursors_cover.png";
import chatrooms  from "./images/chatrooms_cover.png";
import proctoring  from "./images/proctoring_cover.png";
import bazarkam  from "./images/bazarkam_cover.png";
import {  FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        title: "AlienBook",
        description: "A tiny social media platform with necessary features like posts, reactions, comments, reshares.",
        coverImage: alienbook,
        links : {
            demo: "https://alienbook.herokuapp.com/",
            details: "/projects/alienbook",
            source: "https://github.com/varaprasadh/Alienbook"
        },
        techStack: []
    },
    {
        title: "Cursors: NewTab page",
        description: "A chrome extension which shows cool new tab page. currently it has 250+ users and increasing every week",
        coverImage: cursors,
        links : {
            demo: "https://chrome.google.com/webstore/detail/cursors/finlildobfdjhkemcieihnkgmgoikgan",
            details: "#",
            source: "https://github.com/varaprasadh/cursors-v2"
        }
    },
    {
        title: "Anonymous Chat Rooms",
        description: "As the Title says, people can chat anonymously in random rooms.",
        coverImage: chatrooms,
        links : {
            demo: "https://anonymous-chatrooms.web.app",
            details: "#",
            source: "https://github.com/varaprasadh/anonymous-chat-rooms"
        }
    },
    {
        title: "BazarKam: Android + IOS app",
        description: "BazarKam is e-commerce app, built with ReactNative, i worked as freelancer.",
        coverImage: bazarkam,
        links : {
            demo: "https://play.google.com/store/apps/details?id=com.wilson.bazarkam",
            details: "#",
            source: null
        }
    },
    {
        title: "Online Proctoring System",
        description: "It helps to Get rid of lot of paper work in college proctoring system.",
        coverImage: proctoring,
        links : {
            demo: null,
            details: "#",
            source: "https://github.com/varaprasadh/proctoring-system"
        }
    },
]
function Projects() {
    return (
       <div className="projects-container" id="projects">
           <div className="pc-inner">
               <div className="pc-inner-wrapper">
                    <span className="section-title">
                        <SectionTitle title="Projects" icon={<SiGithub size={30}/>}/>
                    </span>
                    <div className="projects-wrapper">
                        {
                            projects.map((project, index) => {
                                const {
                                    title,
                                    description,
                                    coverImage,
                                    links,
                                } = project;

                                return (
                                    <div className="project-container" key={title}>
                                        <div className="project-container-inner">
                                            <div className="project">
                                                <div className="project-cover">
                                                    <img src={coverImage} alt={title}/>
                                                </div>
                                                <div className="project-info">
                                                    <div className="project-title">{title}</div>
                                                    <div className="project-description">{description}</div>
                                                    <div className="links">
                                                        {
                                                            links.source && (
                                                                <a target="_blank" rel="noopener noreferrer" href={links.source} className="links-link source">Source Code</a>
                                                            )
                                                        }
                                                        {
                                                            links.demo && (
                                                                <a target="_blank" rel="noopener noreferrer" href={links.demo} className="links-link launch">Launch</a>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="projects-more">
                        <a target="_blank" rel="noopener noreferrer"  href={"https://github.com/varaprasadh"}  className="pm-button">
                            <div className="pm-inner-text">It's not the end, find more</div>
                            <FaArrowRight size={30}/>
                        </a>
                    </div>
               </div>
           </div>
       </div>
    )
}

export default Projects
