import React from 'react';
import li from '../logos/li.png'
import github from '../logos/github.png'


class SideLogos extends React.Component {
    render() {
        return(
<div class="sidenav">  
    <a href="https://www.linkedin.com/in/alexander-harron-084658157/"> <img src={li} alt='LinkedIn' className='logo' /></a>
    <a href="https://github.com/Alex-Harron"> <img src={github} alt='Gmail' className='logo' /></a>
</div>
    )
}
}


export default SideLogos;