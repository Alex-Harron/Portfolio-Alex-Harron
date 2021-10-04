import React, { Component } from "react";
export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };
render() {
    return (
    <div className="portfolio-item-caption">
        <div >
            <span  onClick={this.handleClick}>&times;</span>
            <h2><center>SouthPaw Marketplace</center></h2>
                <h3>This is a React web application allowing the user to view lefthanded specific products</h3>
                <hr/>
                <p style={{float:'right'}}></p>
                <h4 style={{color:'rgb(170, 170, 170)'}}>
                    <li>Ruby on Rails</li>
                    <li>React/Redux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </h4>
        </div>
    </div>
    );
    }
}
