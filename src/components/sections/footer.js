import React from 'react';
import IconLinkedin from '../../logos/linkedIn';
import PersonalGH from '../../logos/personalgh';



class Footer extends React.Component {
    render() {
        return(
            
<div id='contact'>
<h1>Reach Out:</h1>
<h2>aharron.harron@gmail.com</h2>
<h2><a href="https://github.com/Alex-Harron" target="_blank" rel="noopener noreferrer"><PersonalGH /></a>
    <a href="https://www.linkedin.com/in/alexander-harron" target="_blank" rel="noopener noreferrer"><IconLinkedin /></a>
</h2>
<hr/>
<h4 style={{fontSize:'15px'}}>Designed and Create by: Alexander Harron</h4>
</div>
    )
}
}

export default Footer;