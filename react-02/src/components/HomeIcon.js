import React from 'react';

import home from "./svgAppImages/home.svg"

class HomeIcon extends React.Component {

	render() {
			return (
				<div>
					 <img src={home} className="App-home" alt="home" />
				</div>
			)
		}
}

export default HomeIcon;