import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Board extends React.Component{

	renderPlayer(){
		return <Player />;
	}

	render(){
		return (
			<div>
			{this.renderPlayer()}
			</div>
		);
	}
}

class Player extends React.Component{

	constructor(){
		super();

		this.state = {
			top: 0,
			left: 0
		}
	}



	handleKeyDown = (e) => {
		switch(e.keyCode){
			case 37:
				console.log('left');
				//this.position.left = this.position.left - 1;
				break;
			case 38:
				console.log('top');
				//this.position.top = this.position.top - 1;
				break;
			case 39:
				console.log('right');
				//this.position.left = this.position.left + 1;
				break;
			case 40: 
				console.log('down');
				//this.position.top = this.position.top + 1;
				break;
		}
	}

	render(){
		return (
			<div className="player" style={this.props}></div>
		)
	}

	componentDidMount(){
		window.onkeydown = this.handleKeyDown;
	}
}

class Game extends React.Component{
	render(){
		return (
			<div className="board">
				<Board />
			</div>
		);
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
)