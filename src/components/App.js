import React, { Component } from 'react';
import TopBar from './TopBar'; 
import Map from './Map'; 
import Inputs from './Inputs'; 


export default class App extends Component {

    constructor(){
        super();

        this.state = {
            zoom: 4,
            latlng: { lat: -25.363, lng: 131.044 },
            data: []
        }
    }

    componentDidMount () {
        fetch('../static/data/cities.json')
            .then((response) => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error('Got no response');
            })
            .then((response) => {
                this.setState({ 'data': response.cities })
            })
            .catch((err) => {
                console.log('There was an error getting data', err);
            })
    }

    gotoCity(newLatLng) {
        this.setState({ latlng: newLatLng });
    }

    updateZoom(newZoom) {
        this.setState({ zoom: newZoom });
    }

    render() {
        return (
        <div className="app">
            <TopBar name={ this.state.name }>
                React Components are state machines
            </TopBar>
            <Inputs data={ this.state.data } onZoomChange={ this.updateZoom.bind(this) } onLatLngChange={ this.gotoCity.bind(this) } />
            <Map zoom={ this.state.zoom } latlng={ this.state.latlng } />
        </div>
        )
    }
}
