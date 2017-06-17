import React, { Component } from 'react';

export default class Inputs extends Component {

	constructor (props) {
		super(props);

		this.$zoomInput = null;
	}

	updateZoom (e) {
		let newZoom = parseInt(e.target.value);
		if (!isNaN(newZoom)) {
			this.props.onZoomChange(newZoom);
		}
	}

	updateCity (e) {
		let city = this.props.data[0];
		this.props.onLatLngChange({ lat: city.lat, lng: city.lng });
	}

	render () {
		return (
			<div className="input-group">
				<button className="button" onClick={ (e) => this.updateCity(e) }>Go To Tel Aviv</button>
				<label className="label">&nbsp;Zoom:&nbsp;</label>
				<input className="input" ref={ (el) => { this.$zoomInput = el; }} 
					type="number" onChange={ (e)=> this.updateZoom(e) } />
			</div>
		)
	}
}