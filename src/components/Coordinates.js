import React, { Component } from 'react';

export default class Coordinates extends Component {

	constructor (props) {
		super(props);

		this.googleMaps = null;
		this.state = { lat: 0, lng: 0 };
	}

	componentWillReceiveProps(nextProps) {
		this.googleMaps = nextProps.map;
		google.maps.event.addListener(this.googleMaps, 'mousemove', (e) => {
			let fixedLat = e.latLng.lat();
			fixedLat = fixedLat.toFixed(4);
			let fixedLng = e.latLng.lng();
			fixedLng = fixedLng.toFixed(4);
			this.setState({
				lat: fixedLat,
				lng: fixedLng
			});
		});
	}

	render () {
		return (
			<div className="coordinates-labels">
				<label>Lat: { this.state.lat } Lng: { this.state.lng }</label>
			</div>
		)
	}
}