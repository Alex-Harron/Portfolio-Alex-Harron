import React from 'react';
import Left from '../../logos/LeftMarket.PNG';
import IconGitHub from '../../logos/github';
import Sea from '../../logos/SeaBreeze.PNG';
import Sure from '../../logos/SureShots.PNG';
import IconExternal from '../../logos/external';
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {
    render() {
        return(
            <div id='projects'>
                <Fade bottom>
                    <div className='main'>
                        <h2 style={{color:'#F62A00'}}>Recent Projects:</h2>
                        <br/>
                        <h3><a href="https://southpaw.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={Left}  alt='left-handed' className='img2'/></a></h3>
                        <h3 style={{paddingLeft:'50%', color:'rgb(5, 205, 255)'}}>SouthPaw Marketplace</h3>
                        <h4 style={{width:'90%', paddingLeft:'50%'}}>A React web application built for lefthanders by a lefthander. Being lefthanded can be hard sometimes so I created a marketplace that caters to the needs of a southpaw. This application allows the user to view, review, and add items to their cart.
                            <hr/>
                            <ul style={{color:'rgb(5, 205, 255)'}}>
                                <li>React/Redux</li>
                                <li>Ruby on Rails</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Heroku</li>
                                <a href="https://southpaw.herokuapp.com/" target="_blank" rel="noopener noreferrer"><IconExternal /></a><a href="https://github.com/Alex-Harron/lefthanded-marketplace" target="_blank" rel="noopener noreferrer"> <IconGitHub /></a>
                            </ul>
                        </h4>
                    </div>
                    <br/>
                    <br/>
                    <div className='main'>
                        <h3><a href="https://seabreeze-reality.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={Sea}  alt='SeaBreeze' className='img2' /></a></h3>
                        <h3 style={{paddingLeft:'50%', color:'rgb(5, 205, 255)'}}>SeaBreeze Reality</h3>
                        <h4 style={{width:'90%', paddingLeft:'50%'}}>A single-page Javascript application designed to view a selection of beach houses for review. Select a hosue and leave your feedback. After the review is submitted it is posted to the site.
                            <hr/>
                            <ul style={{color:'rgb(5, 205, 255)'}}>
                                <li>JavaScript</li>
                                <li>Ruby on Rails</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Heroku</li>
                                <a href="https://seabreeze-reality.herokuapp.com/" target="_blank" rel="noopener noreferrer"><IconExternal /></a><a href="https://github.com/Alex-Harron/beach_properties_frontend" target="_blank" rel="noopener noreferrer"> <IconGitHub /></a>
                            </ul>
                        </h4>
                    </div>
                    <br/>
                    <br/>
                    <div className='main' >
                        <h3><a href="https://sure-shots.herokuapp.com/login" target="_blank" rel="noopener noreferrer"><img src={Sure}  alt='Sure-Shots' className='img2' /></a></h3>
                        <h3 style={{paddingLeft:'50%', color:'rgb(5, 205, 255)'}}>Sure Shots</h3>
                        <h4 style={{width:'90%', paddingLeft:'50%'}}>A Ruby on Rails web application built to allow users bet on NBA games. View a specific set of games and select which contest peaks your interest. Then place a bet on who you think will win.
                            <hr/>
                            <ul style={{color:'rgb(5, 205, 255)'}}>
                                <li>Ruby on Rails</li>
                                <li>SQLite3</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Heroku</li>
                                <a href="https://sure-shots.herokuapp.com/login" target="_blank" rel="noopener noreferrer"><IconExternal /></a><a href="https://github.com/Alex-Harron/Sure_Shots" target="_blank" rel="noopener noreferrer"> <IconGitHub /></a>
                            </ul>
                        </h4>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Projects;