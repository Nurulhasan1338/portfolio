import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import Intro from "./components/Introduction/Intro.js"
import About from "./components/About/About.js";
import Project from "./components/project/Project.js";
import Contact from './components/contact.js/Contact';
import Skill from './components/skills/skill.js';

function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  return (
    <div className="App">

      <Navbar/>
      <div ><Intro/></div>
      <div id="scrollspyHeading1"><About/></div>
      <div id="scrollspyHeading2"><Project/></div>
      <div id="scrollspyHeading3"><Skill/></div>
      <div id="scrollspyHeading4"><Contact/></div>


    </div>
  );
}

export default App;
