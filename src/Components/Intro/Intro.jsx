import React, {useContext} from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";


const Intro = () => {
  // Transition
const Transition = {duration: 2, type:"spring"};
// context
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{color: darkMode ? 'white' : ""}}>
            Hy! I Am
            </span>
          <span>Muhammad Zubair</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
       
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* icons */}
        <div className="i-icons">
        
          <img src={LinkedIn} alt="https://www.linkedin.com/in/zubair-gurchani-ab870b23b" />
          <img src={Instagram} alt="" />
          <img src={Github} alt="https://github.com" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right1">
      <img src={Vector1} alt=""  />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
             </div>
    </div>
  );
};

export default Intro;
