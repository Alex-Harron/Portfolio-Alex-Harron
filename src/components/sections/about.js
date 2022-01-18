import React from 'react';
import profilePic from '../../logos/profilePic.jpg';
import Fade from 'react-reveal/Fade';

class About extends React.Component {

    
    render() { 
        return(
            <div id='about'>
                <Fade bottom>
                    <h2 style={{ paddingLeft:'30%', color:'#F62A00'}}> About Me:</h2>
                    <img src={profilePic} alt='Alexander Harron' className='img' />
                    <h4 style={{paddingLeft:'30%'}}>Hello! My name is Alex and I enjoy creating things for  the internet. My interest in software engineering and web development started back in High School when I would mess around in the browser console and change items on a web page to suprise my friends. I didn't know it at the time, but that was teaching me a lot about how to navigate and manipulate HTML!<br/><br/>
                        Fast-forward to today, and after a couple of years of working in IT and closely with developers on my teams, I decided to rekindle my interests and dive head first into the world of software engineering. I'm always focused on learning new technologies and jumping deeper into this passion of mine.<br/><br/>
                        Here are some Technologies I've been working with recently: 
                        <ul >
                            <li>React</li>
                            <li>Redux</li>
                            <li>JavaScript (ES6+)</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </h4>
                </Fade>
            </div>
        )
    }
}

export default About;