import React from 'react';
import PersonalGH from '../logos/personalgh';
import IconLinkedin from '../logos/linkedIn';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return(
      <div className="navbar" >  
        <h3 className="animate__animated animate__fadeInUp" >
          <a href="https://www.linkedin.com/in/alexander-harron-084658157/" target="_blank" rel="noopener noreferrer"> <IconLinkedin /></a>
          <a href="https://github.com/Alex-Harron" target="_blank" rel="noopener noreferrer"> <PersonalGH /></a>
          <a href="https://docs.google.com/document/d/1jVgO0CVta1e69ICaEL1YdbwcEIPMHBgUYRPCyUvnjOc/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='box' >Resume</a>
          <a  href="#about" >About</a>
          <a  href="#projects">Projects</a>
          <a  href="#contact" >Contact</a>
        </h3>
      </div>
    )
  } 
}


export default NavBar;