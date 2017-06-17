import React, { Component } from 'react';

export default class Name_input extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			name: ""
		}
	}

	updateAnswer(event){
		this.setState({
			name: event.target.value
		});

        this.props.onNameChanged(event.target.value);
	}

	render() {

		return (
		    <div className="vbox mt20"> 
                <div className="hbox space-between">
                    <h1 className="paragraph">What is your name?</h1>
                    <input type="text" 
                           className="input cap"
                           placeholder="Your name here..." 
                           onChange={(e)=> this.updateAnswer(e)}/>
                </div>
                <h3 className="paragraph text-left white-text cap">Your input: { this.state.name }</h3>
            </div>
		);
	}
}