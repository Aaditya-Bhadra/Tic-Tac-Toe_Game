// Importing the required components
import Board from './Board';
import Info from "./Info";
import Alert from "./WinnerAlert";

// Importing the CSS File
import "./css/app.css";

// Importing the useState hook
import { useState } from 'react';

function App() {

	// Creating a reset state, which indicates whether
	// the game should be reset or not
	const [reset, setReset] = useState(false);

	// Creating a winner state, which indicates
	// the current winner
	const [winner, setWinner] = useState('');

	// Sets the reset property to true
	// which starts the chain
	// reaction of resetting the board
	const resetBoard = () => {
		setReset(true);
	}

	return (
		<div className="App">
			<div>
				<h1>PLAY TIC-TAC-TOE GAME WITH YOUR FRIENDS AND WIN</h1>
			</div>
			{/* Shrinks the popup when there is no winner */}
			<div className={`winner ${winner !== '' ? '' : 'show'}`}>
				{/* Display the current winner */}
				<Alert winner={winner}/> 
				{/* Button used to reset the board */}
				<button onClick={() => resetBoard()} className='resetButton'>
					Reset Board
				</button>
			</div>
			{/* Custom made board component comprising of
			the tic-tac-toe board */}
			<Board reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			<Info />
		</div>
	);
}

export default App;
