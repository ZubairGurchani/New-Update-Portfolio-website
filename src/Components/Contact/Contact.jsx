import React, { useContext, useRef, useState } from "react"



import "./Contact.css"

import emailjs from "@emailjs/browser"
import { themeContext } from "../../Context"

// Add the emailjs
// npm add emailjs

// add @emailjs/browser
// npm add @emailjs/browser


function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


    const form = useRef()
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          "service_i1fuvr2",
          "template_7mns3i8",
          form.current,
          "dyyp8-tEdysHuNkVZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
   <div className="contact" id='contact'>

  <div className="w-left">
          <div className="awesome">
            <span style={{color: darkMode ? "white" : "" , color:'skyblue'}}
            >Get in Touch</span>
            <span style={{color: 'var(--jameni)'}}>Contact me</span>
         
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" placeholder="Message"/>
            <input type="submit" value="Send" className="button"/>
            <span>{done && "Thanks for Contacting me"}</span>
           
          </form>
        </div>
      </div>
    )
}

export default Contact
