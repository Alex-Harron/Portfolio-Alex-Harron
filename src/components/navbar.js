import React from 'react';
import ahlogo from '../logos/ahlogo.png'


class NavBar extends React.Component {
    render() {
        return(
<div class="topnav">  
  <a href="#home"> <img src={ahlogo} alt='alexharron' className='content' /></a>
  <a href="https://docs.google.com/document/d/1jVgO0CVta1e69ICaEL1YdbwcEIPMHBgUYRPCyUvnjOc/edit?usp=sharing" className='box'>Resume</a>
  <a href="#contact">04. contact</a>
  <a href="#projects">03. projects</a>
  <a href="#experience">02. experience</a>
  <a href="#about">01. about</a>
</div>
    )
}
}


export default NavBar;