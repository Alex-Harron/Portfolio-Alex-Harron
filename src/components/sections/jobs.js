import React from 'react';
import Fade from 'react-reveal/Fade';


class Jobs extends React.Component {
    render() {
        return(
            <div >
                <Fade bottom>
                    <h2 style={{ paddingLeft:'30%', color:'#F62A00'}}>Past Experience:</h2>
                    <h3 style={{ paddingLeft:'30%'}}>Merzier Process Group (MPG), Consultant</h3>
                    <h5 style={{paddingLeft:'30%'}}>Washington D.C. Metro Area - 07/2019 - 04/2021</h5>
                    <h4 style={{paddingLeft:'30%'}}>
                        <ul>
                            <li>
                                Served as a consultant, delivering program analyst support to the
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
                        </ul>
                    </h4>
                </Fade>
            </div>
        )
    }
}

export default Jobs;