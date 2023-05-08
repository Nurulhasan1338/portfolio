import React from 'react'
import "./intro.css"
import Mypic from "../../assets/img/mypic.jpg";
export default function profilepic() {
  return (
    <div className="outerBox">

    <div className="box">
      <div className="content">
        <img src={Mypic} alt="ptofilr pic" />
        {/* <h2>Nurul Hasan <br /><span>software developer</span></h2>  
        <a href="#" target="_blank" rel="noopener noreferrer"></a> */}
      </div>
    </div>
    
    </div>
  )
}
