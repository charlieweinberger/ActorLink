import { useState } from "react";

// Helper functions

function getCluesToDisplay(gameInfo: GameInfo, guesses: string[], hardMode: boolean, gameOver: boolean): string[] {
  const clues: string[] = [];
  const numClues = gameOver ? guesses.length : guesses.length + 1;
  for (let i = 0; i < numClues; ++i) {
    // TODO: this is a temporary solution to the double-actor problem
    clues.push(hardMode ? gameInfo.movieClues[i] : gameInfo.actorClues[i][0]);
  }
  return clues;
}

function getGuessesToDisplay(guesses: string[], gameOver: boolean): string[] {
  return gameOver ? [...guesses] : [...guesses, ""];
}

function getGuessBackgroundColor(gameInfo: GameInfo, guess: string, hardMode: boolean): string {
  if (guess === gameInfo.answer)                       return "rgb(0 255 0)";
  if (hardMode && gameInfo.movieClues.includes(guess)) return "rgb(255 255 0)";
  if (guess === "")                                    return "rgb(200 200 200)";
  return "rgb(255 0 0)";
}

// function printGuesses(guesses: string[], name: string) { // TODO: remove, b/c this is temporary
//   console.log(`\n\n\n\n\n${name}`);
//   console.log("guesses:");
//   console.log(guesses);
//   console.log(`Guesses length: ${guesses.length}`);
//   for (let i = 0; i < guesses.length; ++i) {
//     console.log(`Guess #${i + 1}: ${guesses[i]}`);
//   }
// }

// JSX

export default function Game({ gameInfo, hardMode }: any): JSX.Element {

  const [ gameOver, setGameOver ] = useState(false);
  const [ guess, setGuess ] = useState("");
  const [ guesses, setGuesses ] = useState<string[]>([]);

  const updateGuesses = async () => {

    // Don't allow a guess if the game is over
    if (guess == "" || gameOver) return;

    // update guesses
    setGuesses([ ...guesses, guess ]); // Add new guess and new empty string

    // check for winner
    if (guess === gameInfo.answer) {
      console.log("You win!");
      setGameOver(true);
    } else if (guesses.length === 4) {
      console.log("You lose!");
      setGameOver(true);
    }

  }

  // Sends user message if the enter key is pressed
  const handleEnterKey = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      updateGuesses();
    }
  }
  
  return (
    <div className="w-1/2 h-full blackBorder p-4">

      <div className="flexContainer p-4 gap-4 blackBorder">
        
        {/* clues */}
        <div className="flexContainer flex-col border border-solid w-full">
          {
            getCluesToDisplay(gameInfo, guesses, hardMode, gameOver).map((clue: string, index: number) => (
              <div key={ `Movie #${index}: ${clue}` } className="flexContainer bg-blue-500 w-full">
                {clue}
              </div>
            ))
          }
        </div>

        {/* guesses */}
        <div className="flexContaier flex-col border border-solid w-full bg-zinc-300">
          {
            getGuessesToDisplay(guesses, gameOver).map((guess: string, index: number) => (
              <div key={ `Guess #${index}: ${guess}` } className="flexContainer w-full min-h-[25px]" style={{ backgroundColor: getGuessBackgroundColor(gameInfo, guess, hardMode) }}>
                {guess}
              </div>
            ))
          }
        </div>

      </div>

      {/* Input */}
      <div className="flexContainer p-4 gap-4 blackBorder">
        
        { /* TODO: Implement auto-complete, so users can only input available movies */ }
        <input
          className="blackBorder"
          placeholder="Guess a movie here!"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
          onKeyDown={handleEnterKey}
        ></input>
        
        <button className="blackBorder" onClick={updateGuesses}>
          Guess
        </button>
      
      </div>

    </div>
  );
}
