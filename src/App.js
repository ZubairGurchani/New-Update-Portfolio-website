import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Servic from './Components/Servic/Servic';
import './App.css'
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio'
import Testi  from './Components/Testi/Testi';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div 
    className="App"
    style={{
      background:darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>

<Navbar />
<Intro />
<Servic />
<Experience />
<Works />
<Portfolio />
<Testi />
<Contact />
<Footer />


    </div>
  );
}

export default App;
 