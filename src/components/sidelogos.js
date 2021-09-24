import React from 'react';
import IconLinkedin from '../logos/linkedIn';
import IconGitHub from '../logos/github';

class SideLogos extends React.Component {
    render() {
        return(
<div className="sidenav">  
    <a href="https://www.linkedin.com/in/alexander-harron-084658157/"> <IconLinkedin /></a>
    <a href="https://github.com/Alex-Harron"> <IconGitHub /></a>
</div>
    )
}
}


export default SideLogos;