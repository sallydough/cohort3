import React from 'react';

class MyComp extends React.Component {

	render() {
			return (
				<div>
					<h1>Hello World from MyComp {this.props.WhatToSay}</h1>
					<p><button onClick={this.props.pushChange}>Push Me</button></p>
				</div>
			)
		}
}

export default MyComp;