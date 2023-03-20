import React, {useContext} from 'react'
import "./Servic.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf.pdf'
import { themeContext } from "../../Context";




function Servic() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
<div className="Servic" id='services'>
   {/* Left side */}
   <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "", color:'skyblue' }}
        
        >
          My Awesome</span>
        <span style={{color:'var(--jameni)'}}>services</span>
        <spane>
       	Developing and maintaining the user Interface.<br/>
Managing software workflow.<br/>
	To ensure the website is visually appealing and easy to navigate.<br/>
	Building modular and reusable components and libraries.<br/>
	Knowledge of functional programming and object-oriented programming paradigms.<br/>
  	Understanding of server-side rendering and its benefits and use cases.

        </spane>
    <a href={Resume} download>

<button className="button s-button" style={{ width: '10rem',
    height: '3rem',
    top: '0.5rem'}}>Download CV</button>
    </a>
    </div>

    <div className="cards">

{/* the right side Emoji  */}
<div style={{left: '30rem', top:"15rem"}}
whileInView={{ left: "14rem" }}
transition={transition}>
  <Card 
  emoji = {HeartEmoji}
  heading = {'Design' }
  detail = {" Photoshop, Adobe, Adobe xd"}
  />
</div>

<div style={{ top:'15rem', left: '-2rem'}}
whileInView={{ top: "10rem" }}
transition={transition}>
  <Card emoji={Glasses}
  heading={'Web Developer'}
  detail= {'Html, Css, JavaScript, React, & Vite'}
  />
</div>
{/* 3rd Card */}
<div style={{ left: '14rem',top:"5rem"}}
whileInView={{ left: "35rem" }}
transition={transition}
>
  <Card 
  emoji={Humble}
  heading={"Data Analyces"}
  detail={"Data management on the Ms.Excel, Ms.Word and other project "}
color="rgba(252, 166, 31, 0.45)"
/>
  </div>
   </div>
</div>
  )
}


export default Servic