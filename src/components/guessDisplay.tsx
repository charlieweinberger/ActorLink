function getCluesToDisplay(gameInfo: GameInfo, gameOver: boolean, hardMode: boolean, guesses: string[]): string[] {
  const clues: string[] = [];
  const numClues = gameOver ? guesses.length : guesses.length + 1;
  for (let i = 0; i < numClues; ++i) {
    // TODO: this is a temporary solution to the double-actor problem
    clues.push(hardMode ? gameInfo.movieClues[i] : gameInfo.actorClues[i][0]);
  }
  return clues;
}

function getGuessesToDisplay(gameOver: boolean, guesses: string[]): string[] {
  return gameOver ? [...guesses] : [...guesses, ""];
}

function getGuessBackgroundColor(gameInfo: GameInfo, hardMode: boolean, guess: string): string {
  if (guess === "")                                    return "bg-gray-300";
  if (guess === gameInfo.answer)                       return "bg-green-500";
  if (hardMode && gameInfo.movieClues.includes(guess)) return "bg-yellow-500";
  return "bg-red-500";
}

export default function GuessDisplay({ gameInfo, gameOver, hardMode, guesses }: any): JSX.Element {
  return (
    <div className="flexContainer p-4 gap-4 blackBorder">
        
        {/* clues */}
        <div className="flexContainer flex-col border border-solid w-full">
          {
            getCluesToDisplay(gameInfo, gameOver, hardMode, guesses).map((clue: string, index: number) => (
              <div key={ `Movie #${index}: ${clue}` } className="flexContainer w-full min-h-[25px] bg-blue-500">
                {clue}
              </div>
            ))
          }
        </div>

        {/* guesses */}
        <div className="flexContaier flex-col border border-solid w-full bg-zinc-300">
          {
            getGuessesToDisplay(gameOver, guesses).map((guessToDisplay: string, index: number) => (
              <div key={ `Guess #${index}: ${guessToDisplay}` } className={`flexContainer w-full min-h-[25px] ${getGuessBackgroundColor(gameInfo, hardMode, guessToDisplay)}`}>
                {guessToDisplay}
              </div>
            ))
          }
        </div>

      </div>
  );
}
