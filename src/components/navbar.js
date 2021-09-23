import React from 'react';
import ahlogo from '../logos/ahlogo.png'


class NavBar extends React.Component {
    render() {
        return(
<div class="topnav">  
  <a href="#home"> <img src={ahlogo} alt='alexharron' className='content' /></a>
  <a href="https://docs.google.com/document/d/1jVgO0CVta1e69ICaEL1YdbwcEIPMHBgUYRPCyUvnjOc/edit?usp=sharing" className='box'>Resume</a>
  <a href="#news">03. projects</a>
  <a href="#contact">02. contact</a>
  <a href="#about">01. about</a>
</div>
    )
}
}


export default NavBar;