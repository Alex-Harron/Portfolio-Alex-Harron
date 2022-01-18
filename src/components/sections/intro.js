import React from 'react';

class Intro extends React.Component {
    render() {
        return(     
            <div className='content' id='intro' >
                <h2 className="animate__animated animate__fadeInUp animate__delay-1s" style={{textAlign: 'left', fontSize:'20px'}}>Hi, My Name is</h2>
                <h1 className="animate__animated animate__fadeInUp animate__delay-2s " style={{textAlign:'left'}}>Alexander Harron</h1>
                <h2 className="animate__animated animate__fadeInUp animate__delay-3s " style={{textAlign:'left'}}> I Create Things for The Web.</h2>
                <h4 className="animate__animated animate__fadeInUp animate__delay-4s " style={{ width:'30%'}}>I'm A Full-Stack Software Engineer that has a passion for developing new things and solving problems.</h4>
            </div>
        )
    }
}

export default Intro;