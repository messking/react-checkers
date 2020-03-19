import React, { useState } from 'react';
import './App.css';
import { Floor } from './content/components/Floor';

function App() {
	const [ floor_changes, set_floor_changes ] = useState([]);
	const [ current_hero_loc, set_current_hero_loc ] = useState({
		rowIndex: 0,
		cellIndex: 8
	});
	const [ board, set_board ] = useState([
		[ 'B', '@', 'B', '@', 'B', '@', 'B', '@' ],
		[ '@', 'B', '@', 'B', '@', 'B', '@', 'B' ],
		[ 'B', '@', 'B', '@', 'B', '@', 'B', '@' ],
		[ '@', 'E', '@', 'E', '@', 'E', '@', 'E' ],
		[ 'E', '@', 'E', '@', 'E', '@', 'E', '@' ],
		[ '@', 'W', '@', 'W', '@', 'W', '@', 'W' ],
		[ 'W', '@', 'W', '@', 'W', '@', 'W', '@' ],
		[ '@', 'W', '@', 'W', '@', 'W', '@', 'W' ]
	]);
	const [ red_turn, set_red_turn ] = useState(true);
	const [ all_moves, set_all_moves ] = useState([]);
	console.log(all_moves);
	return (
		<div className="App">
			<div className="Board">
				{board.map((row, rowIndex) => {
					return row.map((cell, cellIndex) => {
						if (cell !== '@')
							return (
								<Floor
									board={board}
									floorColor={'dimgrey'}
									row={row}
									cell={cell}
									set_board={set_board}
									rowIndex={rowIndex}
									cellIndex={cellIndex}
									set_current_hero_loc={set_current_hero_loc}
									current_hero_loc={current_hero_loc}
									red_turn={red_turn}
									set_red_turn={set_red_turn}
									all_moves={all_moves}
									set_all_moves={set_all_moves}
									floor_changes={floor_changes}
									set_floor_changes={set_floor_changes}
								/>
							);
						else
							return (
								<Floor
									board={board}
									floorColor={'silver'}
									row={row}
									cell={cell}
									rowIndex={rowIndex}
									cellIndex={cellIndex}
									red_turn={red_turn}
									set_red_turn={set_red_turn}
									floor_changes={floor_changes}
									set_floor_changes={set_floor_changes}
									all_moves={all_moves}
									set_all_moves={set_all_moves}
								/>
							);
					});
				})}
			</div>
			<button
				onClick={() => {
					set_board([
						[ 'B', '@', 'B', '@', 'B', '@', 'B', '@' ],
						[ '@', 'B', '@', 'B', '@', 'B', '@', 'B' ],
						[ 'B', '@', 'B', '@', 'B', '@', 'B', '@' ],
						[ '@', 'E', '@', 'E', '@', 'E', '@', 'E' ],
						[ 'E', '@', 'E', '@', 'E', '@', 'E', '@' ],
						[ '@', 'W', '@', 'W', '@', 'W', '@', 'W' ],
						[ 'W', '@', 'W', '@', 'W', '@', 'W', '@' ],
						[ '@', 'W', '@', 'W', '@', 'W', '@', 'W' ]
					]);
					set_red_turn(true);
				}}
			>
				Retart Game
			</button>
			{/* <button>Undo</button> */}
			{/* <button>Redo</button> */}
		</div>
	);
}

export default App;
