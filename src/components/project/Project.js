import React from "react";
import { Container, Row} from "react-bootstrap";
import { ProjectCom } from "./projectCom.js";
import img1 from "../../assets/img/textLab (2).png";
import img2 from "../../assets/img/news.jpeg";
import img3 from "../../assets/img/img3 (2).png";
import img4 from "../../assets/img/color-sharp2.png";

export default function Project() {
  const project = [
    {
      title: "News Application",
      proImg: img2,
      li: "https://nurulhasan1338.github.io/News_app/",
      des: "Built in react  Using News API.",
    },
    {
      title: "Text utility app",
      proImg: img1,
      li: "https://nurulhasan1338.github.io/text-lab/#/text-lab",
      des: "A simple text editor",
    },
    {
      title: "E-commerse website",
      proImg: img3,
      li: "https://github.com/Nurulhasan1338/fullStackprojects",
      des: "Built from scratch",
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
    <section className="project" id="project">
      {window.addEventListener("scroll", reveal)}
      <Container className="reveal">
        <Row>
            <h2 className="mb-5">Project</h2>
            <br />
              {project.map((projcts, index) => {
                      return (
                        <ProjectCom
                          key={index}
                          {...projcts }
                        />  
                      )
                    })}

        </Row>
      </Container>
      <img className="background-image-right top-0" src={img4} alt="" />
    </section>
  );
}
