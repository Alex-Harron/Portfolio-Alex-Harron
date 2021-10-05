import React from 'react';
import profilePic from '../../logos/profilePic.jpg';

class About extends React.Component {
    render() {
        return(
            
<div id='about'>
        <a href="https://www.linkedin.com/in/alexander-harron-084658157/" target="_blank" rel="noopener noreferrer"><img src={profilePic} alt='Alexander Harron' className='img' /> </a>
    <h2 style={{color:'orange', paddingLeft:'30%'}}>About Me</h2>
        <h4 style={{paddingLeft:'30%'}}>Hi, my name is Alex HarronHello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!<br/><br/>
        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.<br/><br/>
        Here are some Technologies I've been working with recently: 
    <ul style={{color:'black'}}>
    <li>React</li>
    <li>Redux</li>
    <li>JavaScript (ES6+)</li>
    <li>Ruby on Rails</li>
    </ul></h4>
</div>
    )
}
}

export default About;