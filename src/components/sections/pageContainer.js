import React from 'react';
import About from './about';
import Footer from './footer';
import Intro from './intro';
import Jobs from './jobs';
import Projects from './projects';

class PageContainer extends React.Component {
  render() {
    return(
      <div>
        <div className="header">
          <Intro />
        </div>
        <div className="row">
          <div className="side">
            <About />
            <Jobs />
          </div>
          <div className="main">
            <Projects />
            <br/>
          </div>
        </div>
        <div id='contact' className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default PageContainer;