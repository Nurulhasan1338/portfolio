import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./skill.css";
import anna from "../../assets/img/annapurna.png";
import shivjoti from "../../assets/img/shivjoti.jpg";
import iiit from "../../assets/img/iitlogo.png";
import colorSharp from "../../assets/img/color-sharp (1).png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

export default function Skill() {
  const [para,setPara] = useState(" Hello there! My name is Nurul Hasan, and I am a dedicated and enthusiastic Computer  Science Engineering undergraduate from IIIT Kota. As a full-stack developer, I have a strong foundation in both front-end and back-end technologies, which enables me to create stunning and functional websites. I am passionate about software development and am actively seeking opportunities to showcase my skills and contribute to innovative projects. I have worked on several exciting projects, which have equipped me with a diverse range of technical skills, including proficiency in programming languages such as JavaScript, Python, and C++.");

  const edu = [
    {
      title: "Annapurna public School",
      address: "Kota Rajasthan",
      done: "Secondary Education",
      status: "82.8%",

      img: anna,
    },
    {
      title: "Shiv Jyoti convent school",
      address: "Kota Rajasthan",
      done: "Senior Secondary Education",
      status: "75.8%",

      img: shivjoti,
    },
    {
      title: "Indian Institute of Information Technology Kota",
      address: " Kota Rajasthan",
      done: "Btech in Computer Science Engineering",

      status: "CGPA - 7.33",
      img: iiit,
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
    <div>
      <section className="skill" id="skill">
        {window.addEventListener("scroll", reveal)}
        <Container>
          <Row>
            <div className="skill-bx reveal">
              <Col>
                <h2>About</h2>
                <p> {para}</p>
              </Col>
              <Col>
                <h2 className="reveal">Eduacation</h2>
                <div className="edu reveal">
                  {edu.map((element) => {
                    return (
                      <div className="card">
                        <div className="span">
                          <img src={element.img} alt="" />
                          <h6>{element.title}</h6>
                          <span>{element.address}</span>{" "}
                          <span>{element.done}</span> <br />
                          <span>{element.status}</span> <br />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </div>
          </Row>
        </Container>
        <img src={colorSharp} className="background-image-left" alt="" />
        <img src={colorSharp2} className="background-image-right" alt="" />
      </section>
    </div>
  );
}
