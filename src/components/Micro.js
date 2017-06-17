import React from "react";

export default class Micro extends React.Component {

    componentWillUnmount(){
        console.log("Bye bye " + this.props.index);
    }

    render(){
        return (<li>item {this.props.index} !</li>);
    }
}