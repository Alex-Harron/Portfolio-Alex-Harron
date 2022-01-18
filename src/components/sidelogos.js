import React from 'react';
import IconLinkedin from '../logos/linkedIn';
import IconGitHub from '../logos/github';

class SideLogos extends React.Component {
    render() {
        return(
            <div className="sidenav">  
                <a href="https://www.linkedin.com/in/alexander-harron-084658157/" target="_blank" rel="noopener noreferrer"> <IconLinkedin /></a>
                <a href="https://github.com/Alex-Harron" target="_blank" rel="noopener noreferrer"> <IconGitHub /></a>
            </div>
        )
    }
}


export default SideLogos;