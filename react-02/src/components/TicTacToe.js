import React from 'react';
import Game from "./TicTacToe/Game.js"

// import tictactoe from "./svgAppImages/tic.svg"

class TicTacToe extends React.Component {

	render() {
			return (
				<div className="App-Icons">
					<Game />
				</div>
			)
		}
}

export default TicTacToe;