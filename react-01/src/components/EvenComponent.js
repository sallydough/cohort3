import React from 'react';

class EvenComponent extends React.Component {

	render() {
        if (this.props.counter % 2 === 0)
			return (
				<div>
					<h1>Even</h1>
				</div>
			); else return null;
		}
}

export default EvenComponent;