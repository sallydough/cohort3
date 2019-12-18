import React from 'react';

import city from "./svgAppImages/city.svg"

class City extends React.Component {

	render() {
			return (
				<div>
					<img src={city} className="App-city" alt="city" />
				</div>
			)
		}
}

export default City;