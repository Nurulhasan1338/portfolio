import React from "react";
import "./skill.css";
import 'animate.css';
import { Container,Row,Col } from "react-bootstrap";
export default function Skill() {

  const skills = [
    {
      name: "Html",
      percent: 75,
      styl:{
      "--clr": "blue",
      "--num":"75"
      }
    },
    {
      name: "Css",
      percent: 70,
      styl:{
      "--clr": "Green",
      "--num":"70"
      }
    },
    { 
      name: "Javascript",
      percent: 60,
      styl:{
      "--clr": "yellow",
      "--num":"60"
      }
    },
    {
      name: "Sql",
      percent: 65,
      styl:{
      "--clr": "white",
      "--num":"65",
      }
    },
    {
      name: "Php",
      percent: 55,
      styl:{
      "--clr": "orange",
      "--num":"55"
      }
    },
    {
      name: "C++",
      percent: 70,
      styl:{
      "--clr":"red",
      "--num":"70"
      }
    },
    {
      name: "react",
      percent: 60,
      styl:{
      "--clr":"pink",
      "--num":"60"
      }
    },
    {
      name: "Bootstrap",
      percent: 70,
      styl: {
      "--clr": "blue",
      "--num": "70"
      }
    },
  ];
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
    
    <section className="skill mt-5" id="skills">
      {window.addEventListener("scroll", reveal)}
      <Container>
        <Row>
          <Col>
          <div className="skill-bx reveal">
            <h2>My Skills</h2> <br /> <br />
            <div className="d-flex justify-content-center row row-col-4 ">
            {skills.map((skill, index) => {
              return (
         <div className="col reveal">
            <div className="CarD" key={index}>
              <div className="percent" style={skill.styl}>
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="num">
                  <h2>
                    {skill.percent} <span>%</span>
                  </h2>
                  <p>{skill.name}</p>
                </div>
              </div>
            </div>
         </div>
      
          );
        })}
        </div>
        
          </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
