import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Map extends React.Component{
	render(){

		return (
			<div>Map</div>
		)
	}
}

class Game extends React.Component{
	render(){
		return (
			<Map />
		)
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
)