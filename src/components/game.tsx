// import { useState } from "react";

// import GuessDisplay from "./guessDisplay";
// import Input from "./input";

// // JSX

// export default function Game({ hardMode, gameInfo }: any): JSX.Element {

//   const [ gameOver, setGameOver ] = useState(false);
//   const [ guess, setGuess ] = useState("");
//   const [ guesses, setGuesses ] = useState<string[]>([]);

//   const updateGuesses = async () => {

//     // Don't allow a guess if the game is over
//     if (guess == "" || gameOver) return;

//     // update guesses
//     setGuesses([ ...guesses, guess ]); // Add new guess and new empty string

//     // check for winner
//     if (guess === gameInfo.answer) {
//       console.log("You win!");
//       setGameOver(true);
//     } else if (guesses.length === 4) {
//       console.log("You lose!");
//       setGameOver(true);
//     }

//   }
  
//   return (
//     <div className="w-1/2 h-full blackBorder p-4">
//       <GuessDisplay
//         gameInfo={gameInfo} gameOver={gameOver} hardMode={hardMode} guesses={guesses}
//       ></GuessDisplay>
//       <Input
//         className={gameOver ? "hidden" : ""}
//         guess={guess} setGuess={setGuess} updateGuesses={updateGuesses}
//       ></Input>
//     </div>
//   );
// }
