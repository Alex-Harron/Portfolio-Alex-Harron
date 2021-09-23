import React from 'react';
import ahlogo from '../ahlogo.png'


class NavBar extends React.Component {
    render() {
        return(
<div class="topnav">  
<a href="#home"> <img src={ahlogo} alt='alexharron' className='content' /></a>
<div>
  <a href="#news">Resume</a>
  <a href="#news">03. projects</a>
  <a href="#contact">02. contact</a>
  <a href="#about">01. about</a>
</div>
</div>
    )
}
}


export default NavBar;