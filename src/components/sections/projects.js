import React from 'react';
import Left from '../../logos/LeftMarket.PNG';
import IconGitHub from '../../logos/github';
import Sea from '../../logos/SeaBreeze.PNG';
import Sure from '../../logos/SureShots.PNG';


class Projects extends React.Component {
    render() {
        return(
            
<div id='projects' className='column middle'>
    <h1>Things I've Created:</h1>
    <br/>
    <div className='box-container'>
        <div className='parent'>
            <h3><img src={Left}  alt='left-handed' className='project-pic' /></h3>
            <div className='child-2'>
                <h2><center>SouthPaw Marketplace</center></h2>
                <h3>This is a React web application allowing the user to view lefthanded specific products</h3>
                <hr/>
                <p style={{float:'right'}}><a href="https://github.com/Alex-Harron/lefthanded-marketplace" target="_blank" rel="noopener noreferrer"><IconGitHub /></a></p>
                <h4 style={{color:'rgb(170, 170, 170)'}}>
                    <li>Ruby nn Rails</li>
                    <li>React/Redux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Heroku</li>
                </h4>
            </div>
            <br/>
            <br/>
        </div>
        <div className='parent'>
            <h3><img src={Sea}  alt='left-handed' className='project-pic' /></h3>
            <div className='child'>
                <h2><center>Sea-Breeze Reality</center></h2>
                <h3>A Single-page Javascript application that allows the user to view and review beach houses</h3>
                <hr/>
                <p style={{float:'right'}}><a href="https://github.com/Alex-Harron/beach_properties_frontend" target="_blank" rel="noopener noreferrer"><IconGitHub /></a></p>
                <h4 style={{color:'rgb(170, 170, 170)'}}>
                    <li>Ruby on Rails</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Heroku</li>
                </h4>
            </div>
        </div>
        <br/>
        <br/>
        <div className='parent'>
            <h3><img src={Sure}  alt='left-handed' className='project-pic'/></h3>
            <div className='child-2'>
                <h2><center>Sure Shots</center></h2>
                <h3>Ruby on Rails application allowing the user to “bet” on predetermined NBA games</h3>
                <hr/>
                <p style={{float:'right'}}><a href="https://github.com/Alex-Harron/Sure_Shots" target="_blank" rel="noopener noreferrer"><IconGitHub /></a></p>
                <h4 style={{color:'rgb(170, 170, 170)'}}>
                    <li>Ruby On Rails</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Heroku</li>
                </h4>
            </div>
        </div>
    </div>
</div>
    )
}
}

export default Projects;