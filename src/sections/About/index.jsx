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
                                   👋 Hi,I'm Junior Fullstack Engineer, Learning something new day by day.
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
               <div className="about-block right-timeline">
                   <Timeline eventData={data} />
               </div>
           </div>
        </div>
    )
}

function Timeline(props){
    function TimelineItem(props){
        return (
                <li className="row timeline-item">
                    <h3 className="timeline-item-title">
                        {props.eventTitle}
                    </h3>
                    <div className="timeline-item-selector">
                    </div>
                    <div className="timeline-item-date">
                        {props.eventDate}
                    </div>
                </li>
            );
    }
		var items = props.eventData.map(function(item, index) {
		 	return (
		 		<TimelineItem key={index} eventTitle={item.eventTitle} eventDate={item.eventDate} />
		 	);
		 });
		return (
			<ul className="timeline">
		 		{items}
			</ul>
		);
}

var data = [
	{
		eventTitle: "Leet Coding & Learning",
		eventDate: "May 2021"
	},
	{
		eventTitle: "Software Engineer, VSH Solutions",
		eventDate: "October 2020"
	},
	{
		eventTitle: "B.Tech in Computer Science",
		eventDate: "September 2020"
	},
    {
		eventTitle: "Part Time Freelancing",
		eventDate: "June 2019"
	},
	{
		eventTitle: "Trainee Web Engineer at VSH Solutions",
		eventDate: "May 2019"
	},
	{
		eventTitle: "Diploma in Mechanical Engg.",
		eventDate: "2017"
	},
	{
		eventTitle: "Secondary Education",
		eventDate: "2014"
	}
]



export default About;
