import React from 'react';
import MPGLogo from '../../logos/MPG-Logo.png'


class Jobs extends React.Component {
    render() {
        return(
            
<div id='experience' className='column middle'>
    <h1>
    Past Experience:
    <br/>
    </h1>
    <div className='box-container'>
        <h2>Merzier Process Group (MPG), Consultant</h2>
        <h3 style={{fontSize:'12px', textAlign:'left'}}>Washington D.C. Metro Area - 07/2019 - 04/2021</h3>
        <h4 style={{color:'rgb(170, 170, 170)'}}>
            <li>
                Served as an associate consultant, delivering program analyst support to the
                Department of Veteran Affairs.
            </li>
            <br/>
            <li>
                Lead project team to solve problems, implement changes, provide
                ecommendations and track project documents and artifacts regarding business
                and technical requirements.
            </li>
            <br/>
            <li> 
                Developed, edited, and managed management plans, policy documents, program plans,
                functional and business documents, technical documents, PowerPoint and Excel
                documents and providing required 508 compliance in accordance with VA.
            </li>
        </h4>
        <br/>
        <a href='https://www.merzierprocessgroup.com/' target="_blank" rel="noopener noreferrer"><img src={MPGLogo} className='right-pic' style={{float: 'left'}} alt='mpg'/></a>
    </div>
</div>

    )
}
}

export default Jobs;