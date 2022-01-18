import React from 'react';
import Fade from 'react-reveal/Fade';



class Footer extends React.Component {
    render() {
        return(
            <div id='contact'>
                <Fade bottom>
                    <h1>Reach Out:</h1>
                    <h2 style={{color:'rgb(5, 205, 255)'}}>aharron.harron@gmail.com</h2>
                    <hr/>
                    <h4 style={{fontSize:'15px'}}>Designed and Create by: Alexander Harron</h4>
                </Fade>
            </div>
        )
    }
}

export default Footer;