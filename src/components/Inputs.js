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
		let selection = e.target.value;
		if (parseInt(selection) >= 0) {
			let city = this.props.data[parseInt(selection) - 1];
			this.props.onLatLngChange({ lat: city.lat, lng: city.lng });
		}
	}

	render () {
		return (
			<div className="input-group">
				<select className="button" onChange={ (e) => this.updateCity(e) }>
					<option value="-1">Select a city ...</option>
					{
						this.props.data.map((el, index) => {
							return (
								<option key={ el.id } value={ el.id }>{ el.name }</option>
							)
						})
					}
				</select>
				<label className="label">&nbsp;Zoom:&nbsp;</label>
				<input className="input" ref={ (el) => { this.$zoomInput = el; }} 
					type="number" onChange={ (e)=> this.updateZoom(e) } />
			</div>
		)
	}
}