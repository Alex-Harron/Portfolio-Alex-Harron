import React from 'react';


class NavBar extends React.Component {
    render() {
        return(
<div class="navbar">  
  <h3><a href="https://docs.google.com/document/d/1jVgO0CVta1e69ICaEL1YdbwcEIPMHBgUYRPCyUvnjOc/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='box'>Resume</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a></h3>
</div>
    )
}
}


export default NavBar;