import React from 'react';
import Left from '../../logos/LeftMarket.PNG';
import IconGitHub from '../../logos/github';

class Projects extends React.Component {
    render() {
        return(
            
<div id='projects' className='column middle'>
<h1>Things I've Created:</h1>
<br/>
<div className='box-container'>
    <div className='parent'>
<h3><img src={Left}  alt='left-handed' className='project-pic' style={{width: '80%'}}/></h3>
<div className='child'>
<h2><center>Left-Handed MarketPlace</center></h2>
<h3>This is a React web application allowing the user to view lefthanded specific products</h3>
<hr/>
<p style={{float:'right'}}><IconGitHub/></p>
<h4><li>Ruby On Rails</li>
<li>React/Redux</li>
<li>HTML</li>
<li>CSS</li></h4>
</div>
<br/>
<br/>
    <div className='parent'>
<h3><img src={Left}  alt='left-handed' className='project-pic' style={{width: '80%'}}/></h3>
<div className='child-2'>
<h2>Left-Handed MarketPlace</h2>
<h3>Single page React application allowing the user to view lefthanded specific products</h3>
<hr/>
<p style={{float:'right'}}><IconGitHub/></p>
<h4><li>Built a Ruby on Rails API with a PostgreSQL database</li>
<li>Developed a frontend platform using React/Redux</li>
<li>Styled using HTML and CSS</li></h4>
</div>
</div>
</div>
<br/>
<br/>
<div className='parent'>
<h3><img src={Left}  alt='left-handed' className='project-pic' style={{width: '80%'}}/></h3>
<div className='child'>
<h2><center>Left-Handed MarketPlace</center></h2>
<h3>This is a React web application allowing the user to view lefthanded specific products</h3>
<hr/>
<p style={{float:'right'}}><IconGitHub/></p>
<h4><li>Ruby On Rails</li>
<li>React/Redux</li>
<li>HTML</li>
<li>CSS</li></h4>
</div>
</div>
</div>
</div>
    )
}
}

export default Projects;