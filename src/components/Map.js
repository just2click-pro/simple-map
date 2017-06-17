import React, { Component } from 'react';
import Coordinates from './Coordinates';

export default class Map extends Component {

	constructor(props) {
		super(props);

		this.state = {
			map: null	
		}
	}

	componentDidMount () {
		this.setState({
			map: new google.maps.Map(this.$map, {
				zoom: this.props.zoom,
				center: this.props.latlng
			}) 
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.zoom !== nextProps.zoom) {
			this.state.map.setZoom(nextProps.zoom);
		}

		if ((this.props.latlng.lat !== nextProps.latlng.lat) || 
			(this.props.latlng.lng !== nextProps.latlng.lng)) {
			this.state.map.setCenter(nextProps.latlng);
		}
	}

	render () {
		return (
			<div>
				<div className="map-container" ref={(el) => { this.$map = el; }}></div>
				<Coordinates map={ this.state.map } />
			</div>
		); 
	}

}