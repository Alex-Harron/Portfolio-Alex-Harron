import React from 'react';
import About from './about';
import Intro from './intro';
import Jobs from './jobs';
import Projects from './projects';


class PageContainer extends React.Component {
    render() {
        return(
        <div>
<div class="header">
            <Intro />
</div>

<div class="row">
  <div class="side">
    <About />
    <Jobs />
  </div>
  <div className="main">
    <Projects />
    <br/>
  </div>
</div>

<div id='contact' class="footer">
  <h2>Footer</h2>
</div>
</div>
    )
}
}

export default PageContainer;