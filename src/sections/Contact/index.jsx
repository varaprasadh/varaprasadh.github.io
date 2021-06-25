/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import "./style.scss";

import { 
    SiGithub,
    SiGooglemaps,
    SiGooglemessages,
    SiInstagram,
    SiLinkedin,
    SiStackoverflow,
    SiTelegram,
    SiTwitter,
} from 'react-icons/si';
import SectionTitle from '../../components/SectionTitle.jsx';
import { FaSpinner } from 'react-icons/fa';

const socialAccounts = [
    {
        title: "Linkedin",
        icon: <SiLinkedin size={30}/>,
        link: "https://www.linkedin.com/in/varaprasadh/"
    },
    {
        title: "Twitter",
        icon: <SiTwitter size={30}/>,
        link: "https://twitter.com/consious_coder"
    },
    {
        title: "Instagram",
        icon: <SiInstagram size={30}/>,
         link: "https://www.instagram.com/i_varaprasadh/"
    },
    {
        title: "Github",
        icon: <SiGithub size={30}/>,
         link: "https://github.com/varaprasadh"
    },
    {
        title: "Stackoverflow",
        icon: <SiStackoverflow size={30}/>,
        link: "https://stackoverflow.com/users/8386483/varaprasadh"
    },

]

function Form(){
    
    const [name,setName ] = useState("");
    const [email,setEmail ] = useState("");
    const [message,setMessage ] = useState("");
    const [errors,setErrors] = useState({});
    
    const [sending,setSending] = useState(false);
    const [submitted,setSubmitted] = useState(false);

    useEffect(()=>{
        const _errors = {...errors};

        _errors.name=name.trim()==="" ? "Name can't be empty!" :null ; 
        _errors.message=message.trim()==="" ? "Come on, type something" :null  ;
        const _email = email.trim();

        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(_email === ''){
            _errors.email = "Email can't be Empty"
        }else if(!re.test(_email)){
            _errors.email = "Email is not valid"
        }else{
            _errors.email = null;
        }

        setErrors(_errors)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name,email, message]);

    useEffect(()=>{
        setErrors({});
    }, []);

    async function submit(){
        const errLength = Object.values(errors).filter(i=>i!==null).length;

        const data = {
            name: name.trim(),
            email: email.trim(),
            message: message.trim()
        };

        if(!!!data.name || !!!data.email || !!!data.message){
            return;
        }
        if(errLength){
            return
        }


        setSending(true);

        try{
            const payload = {
                service_id: "service_t931dba",
                template_id: "template_7e3rdqb",
                user_id: "user_LFxvGN2pS2ro2IEV0vry1",
            };
            const  template_params = {
                from_name: data.name,
                message: data.message,
                reply_to: data.email
            };

           const response  = await emailjs.send(payload.service_id, payload.template_id,template_params, payload.user_id )
            
           if(response.status === 200){
                setSubmitted(true);
           }
        }catch(err){
            console.log(err);
        }finally{
            setSending(false);
        }
    }
    if(submitted){
        return (
            <div className="form-greetings">
                <div className="message">  🙌  Thank You, <br/> <strong>Varaprasadh</strong> will get back to you soon...</div>
            </div>
        )
    }
    return (
         <form className="form-wrapper">
            <div className="form-header">
                <SiGooglemessages size={30}/>
                <span>Send me a message</span>
            </div>
            <div className="input-wrapper">
                <div className="label">Name</div>
                <input onChange={e=>setName(e.target.value)} value={name} type="text" name="name" id="name"/>
                {
                    errors.name && <div className="error-message">{errors.name}</div>
                }
            </div>
            <div className="input-wrapper">
                <div className="label">Email</div>
                <input  onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email" id="email"/>
                {
                    errors.email && <div className="error-message">{errors.email}</div>
                }
            </div>
            <div className="input-wrapper">
                <div className="label">Message</div>
                <textarea  onChange={e=>setMessage(e.target.value)} value={message} name="message" id="message" cols="30" rows="3"></textarea>
                {
                    errors.message && <div className="error-message">{errors.message}</div>
                }
            </div>
            <div className="actions">
                <div className="action send" onClick={submit}>
                    {
                        !sending ? (
                            <>
                                <div className="action-title">Send</div>
                                <div className="action-icon"><SiTelegram size={30}/></div>
                            </>
                        ): (
                           <>
                            <div className="action-title">Wait</div>
                            <div className="action-icon rotation"><FaSpinner size={30}/></div>
                           </>
                        )
                    }
     
                </div>
            </div>
        </form>
    )
}

function Contact() {

    return (
        <div className="contact-container" id="contact">
            <div className="contact-container-inner">
                <div className="contact-block left">
                    <div className="form-container">
                       <Form/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="contact-block right">
                    <div className="contact-right-sub-section">
                        <SectionTitle title="Address" icon={<SiGooglemaps size={30}/>}></SectionTitle>
                        <div className="address-content">
                            Door No: 1-166,Main Street, <br/>
                            Chalivendhri(village),Veeraghattam, <br/>
                            Srikakulam. 532460 <br/>
                            Andhra Pradesh, India.
                        </div>
                    </div>
                    <div className="contact-right-sub-section">
                        <SectionTitle title="Catch me in"></SectionTitle>
                        <div className="social-container">
                            {
                                socialAccounts.map(({ title, icon, link })=>(
                                    <a key={title} className="social-item" href={link} target="_blank" rel="noopener noreferrer">
                                        <div className="social-item-inner" >
                                            <div className="social-item-icon">{icon}</div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

