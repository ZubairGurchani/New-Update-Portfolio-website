import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";

import {Link} from 'react-scroll'

function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


  return (
    <div className="works" id="works">
  <div className="w-left">
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "", color: 'skyblue' }}>
        Works for All these
        </span>
    <span style={{color:'var(--jameni)'}}>Brands & Clients</span>
    <span>
      React Js Project.
      <br />
      React Js With bootstrip Project.
      <br />
     React Js with Material UI Projcet.
      <br />
      React Js with Vite Projcet.
      <br />
    </span>
    <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          >
            
          </div>
        </div>

{/* right side  */}
</div>


<div className="w-right">
<div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
        <div className="w-secCircle">
            <img src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Amazon} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Facebook} alt="" />   
    </div>
    </div>
    <div className="w-backCircle blueCircle"></div>
    <div className="w-backCircle yellowCircle"></div>
    </div>
    </div>
 


  )
}

export default Works