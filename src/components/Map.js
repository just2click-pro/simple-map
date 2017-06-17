import React, { Component } from 'react';

export default class Map extends Component {

	constructor(props) {
		super(props);

		this.map = null;
	}

	componentDidMount () {
		this.map = new google.maps.Map(this.$map, {
			zoom: this.props.zoom,
			center: this.props.latlng
		});
	}

	shouldComponentUpdate () {
		return false;
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.zoom !== nextProps.zoom) {
			this.map.setZoom(nextProps.zoom);
		}

		if ((this.props.latlng.lat !== nextProps.latlng.lat) || 
			(this.props.latlng.lng !== nextProps.latlng.lng)) {
			this.map.setCenter(nextProps.latlng);
		}
	}

	render () {
		return (
			<div className="map-container" ref={(el) => { this.$map = el; }}></div>
		); 
	}

}