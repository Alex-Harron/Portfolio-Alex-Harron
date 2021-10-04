import React from 'react';
import profilePic from '../../logos/profilePic.jpg';

class About extends React.Component {
    render() {
        return(
            
<div id='about' className='column middle'>
    <h1>About Me:</h1>
    <hr/>
    <div className='box-container'>
        <a href="https://www.linkedin.com/in/alexander-harron-084658157/" target="_blank" rel="noopener noreferrer"><img src={profilePic} alt='Alexander Harron' className='right-pic'/> </a>
        <h3>Hi, my name is Alex Harron</h3>
    </div>
</div>
    )
}
}

export default About;