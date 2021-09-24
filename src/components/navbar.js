import React from 'react';
import ahlogo from '../logos/ahlogo.png'


class NavBar extends React.Component {
    render() {
        return(
<div class="topnav">  
  <a href="#home"> <img src={ahlogo} alt='alexharron' className='personal-logo' /></a>
  <h3><a href="https://docs.google.com/document/d/1jVgO0CVta1e69ICaEL1YdbwcEIPMHBgUYRPCyUvnjOc/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='box'>Resume</a>
  <a href="#contact">contact</a>
  <a href="#projects">projects</a>
  <a href="#experience">experience</a>
  <a href="#about">about</a></h3>
</div>
    )
}
}


export default NavBar;