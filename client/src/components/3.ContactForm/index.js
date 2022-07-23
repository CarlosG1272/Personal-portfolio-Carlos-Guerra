import React, { useState } from "react"; 
import { FormGlobalContainer, ImageContainer, ImageGlobalContainer, MyForm } from "./contactElements";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import {FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"
import {motion} from "framer-motion"; 

export default function ContactForm() {
    const [form,setForm] = useState({name:"" , lastname:"" , email:"", message: ""}); 

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setForm({...form, [name]: value})
    }

    const handleSend = async (e) => {
        e.preventDefault(); 
        if (form.name !== "" && form.lastname !== "" && form.email !== "" && form.message !== "") {
            try {
                const formulario = document.getElementById("form")
                console.log(formulario)
                await emailjs.sendForm("service_34h5hbs", "template_u93fx8h", formulario, "7qKTA5YqNE8GED_Fj")
                alert("Message sent successfully")
                setForm({name:"" , lastname:"" , email:"", message: ""})
            } catch(e){
                    console.log(e)
                    alert("Error in send")
            }
                
            } else {
                alert("You cannot send a empty message")
            }
        
       
    }    
    return(
    <motion.section 
        className={"containerNEW"}
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 1 }}}
    >
        <ImageGlobalContainer>
            <ImageContainer>
                <img src={require("../../assets/email.png")} alt="email"/>
            </ImageContainer>
            <div id="contact">
                <a href="https://www.linkedin.com/in/carlos-guerra-9510a9241/" target={"_blank"} rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/CarlosG1272" target={"_blank"} rel="noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100081600548515" target={"_blank"} rel="noreferrer">
                    <FaFacebook />
                </a>
            </div>
        </ImageGlobalContainer>

        <FormGlobalContainer>
            <h1>Leave me a message</h1>
            <MyForm id="form">
                <div className="inputContainer">
                    <input type={"text"} name="name" value={form.name} onChange={handleChange} placeholder="First Name"/>
                </div>

                <div className="inputContainer"> 
                    <input type={"text"} name="lastname" value={form.lastname} onChange={handleChange}  placeholder="Last Name"/>
                </div>

                <div className="inputContainer">
                    <input type={"email"} name="email" value={form.email} onChange={handleChange}  placeholder="What's your email?"/>
                </div>
                <div className="inputContainer">
                    <textarea type={"text"} name="message" value={form.message} onChange={handleChange} placeholder="Your message"/>
                </div>
                <button type={"submit"} onClick={handleSend} className="Button">SEND</button>
            </MyForm>
        </FormGlobalContainer>

    </motion.section>)
}