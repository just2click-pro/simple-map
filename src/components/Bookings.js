import React, { Component } from 'react';
import Micro from "./Micro";

export default class Card extends Component {

    constructor(props){
        super(props);

        let appState = localStorage.getItem("appStorage");

        appState = JSON.parse(appState);

        this.state = appState || { booked: 0 };
    }

    bookItem(){
        this.setState({
            booked: this.state.booked + 1
        });
    }

    removeItem(){
        this.setState({
            booked: this.state.booked - 1
        });
    }

    componentDidUpdate(){
        localStorage.setItem("appStorage", JSON.stringify(this.state) );
    }

    renderMicros(){
        let micros = [];

        for(let i=0; i<this.state.booked; i++)
          micros.push(<Micro key={i} index={i}/>)

        return micros;
    }

    render() {
        return (
            <div className="hbox space-between mt20">
              <h3 className="paragraph">Items booked: { this.state.booked }</h3>
              <button className="button"
                      onClick={ ()=> this.bookItem() }>Book Item!</button>

              <button className="button"
                      onClick={ ()=> this.removeItem() }>Remove Item!</button>

              <ul>
                  { this.renderMicros() }
              </ul>
            </div>
            )
        }
    }




































