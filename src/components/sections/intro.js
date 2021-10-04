import React from 'react';
import test from '../../logos/test.drawio.svg';

class Intro extends React.Component {
    render() {
        return(
            
<div id='intro'  >
<img src={test} alt='alexharron' className='personal-logo' />
<h4 style={{ textAlign:'left'}}>Hello, My Name is</h4>
<h1 className='neonText' >Alexander Harron</h1>
<h4 style={{textAlign:'right'}}>I Create Things for The Web.</h4>
</div>

    )
}
}


export default Intro;