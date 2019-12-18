import React from 'react';

import account from "./svgAppImages/bank.svg"

class Account extends React.Component {

	render() {
			return (
				<div className="App-Icons">
					<img src={account} className="App-account" alt="account" />
				</div>
			)
		}
}

export default Account;