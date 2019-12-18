import React from 'react';

import tictactoe from "./svgAppImages/tic.svg"

class TicTacToe extends React.Component {

	render() {
			return (
				<div className="App-Icons">
					<img src={tictactoe} className="App-tictactoe" alt="tictactoe" />
				</div>
			)
		}
}

export default TicTacToe;