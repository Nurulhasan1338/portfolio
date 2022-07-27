import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Logo from '../../assets/img/allahLogo.jpg'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/hacker.svg';
import navIcon4 from '../../assets/img/github.svg';
import navIcon5 from '../../assets/img/leetcode.svg';
import "../../App.css";

function Mynavbar() {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled]= useState(false);
    const [clicked,setClicked]= useState(false);


    const onUpdate=(value)=>{
        setActiveLink(value);
    }

    useEffect(() => {
      const onScroll=()=>{
        if(window.scrollY>50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
      }
    window.addEventListener("scroll",onScroll);
      return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const imgstyl={
      "font-size" : "24px",
      color : "white",
      transition:"1s all esae"
    }
const change=()=>{
    clicked?setClicked(false):setClicked(true);
}
    
  return (
    <Navbar expand="lg" className={(scrolled || clicked )?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" className='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={change}>
            <span>{clicked?<i className="fa fa-close" style={imgstyl}></i>:<i className="fa fa-bars" style={imgstyl}></i>}</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ?'active navbar-link':'navbar-link'} onClick={() => onUpdate('home')} >Home</Nav.Link>
            <Nav.Link href="#scrollspyHeading1" className={activeLink==='about' ?'active navbar-link':'navbar-link'} onClick={() => onUpdate('about')} >about</Nav.Link>
            <Nav.Link href="#scrollspyHeading2" className={activeLink==='Project' ?'active navbar-link':'navbar-link'} onClick={() => onUpdate('Project')} >Projects</Nav.Link>
            <Nav.Link href="#scrollspyHeading3" className={activeLink==='skill' ?'active navbar-link':'navbar-link'} onClick={() => onUpdate('skill')} >Skill</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/nurul-hasan-173550204/"><img src={navIcon1} target="_blank" rel="noopener noreferrer" alt="ico" /></a>
                <a href="https://leetcode.com/Nurul_hasan/"><img src={navIcon5 } alt="ico" target="_blank" rel="noopener noreferrer"/></a>
                <a href="https://www.hackerrank.com/Nuruhasan62"><img src={navIcon3} target="_blank" rel="noopener noreferrer" alt="ico" /></a>
                <a href="https://github.com/Nurulhasan1338"><img src={navIcon4} target="_blank" rel="noopener noreferrer" alt="ico" /></a>
            </div>
            <button className='vvd' onClick={()=>{window.location.href="#scrollspyHeading4"}}><span> Contact me! </span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
