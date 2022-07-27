import React from 'react';
import Col from 'react-bootstrap/Col';
import "./project.css";

export const ProjectCom = ({title,des,proImg,li}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
           <img src={proImg} alt="" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{des}</span>
                  <br />
                <a  className='prolink' href={li} target="_blank"  rel="noreferrer">view</a>
              
            </div>
        </div>
    </Col>
  )
}
