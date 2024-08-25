"use client";

import { useState } from "react";

import GuessDisplay from "./../components/guessDisplay";
import Input from "./../components/input";
import Description from "./../components/description";

import POSSIBLE_GAMES from "../../data/possibleGames";

// React helper functions

function initializeGame(): GameInfo {

  const randomGame: GameInfo = POSSIBLE_GAMES[Math.floor(Math.random() * POSSIBLE_GAMES.length)];
  const randomOrder: number[] = getRandomOrder();

  const gameState: GameInfo = {
    "movieClues": sortArray(randomGame.movieClues, randomOrder),
    "actorClues": sortArray(randomGame.actorClues, randomOrder),
    "answer": randomGame.answer
  };
    
  return gameState;

}

function getRandomOrder(): number[] {
  let array: number[] = [0, 1, 2, 3, 4];
  for (let i = 4; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sortArray(inputArray: any[], randomOrder: number[]): any[] {
  const tempArray: any[] = [];
  for (let i of randomOrder) {
    tempArray.push(inputArray[i]);
  }
  return tempArray;
}

// Main JSX element to return

export default function Home() {
  
  // React

  const [ gameInfo, setGameInfo ] = useState<GameInfo>({
    "movieClues": ["", "", "", "", ""],
    "actorClues": [ [""], [""], [""], [""], [""] ],
    "answer": ""
  });
  const [ newGame, setNewGame ] = useState(false);
  const [ hardMode, setHardMode ] = useState(true); // Should be false, is only true for testing
  
  const [ gameOver, setGameOver ] = useState(false);
  const [ guess, setGuess ] = useState("");
  const [ guesses, setGuesses ] = useState<string[]>([]);

  const createNewGame = () => {
    setNewGame(true);
    setGameInfo(initializeGame());
  }

  const updateHardMode = () => {
    setHardMode(!hardMode);
  }

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

  // JSX

  return (
    <div className="flexContainer flex-col w-screen h-screen py-4 gap-4">

      {/* Title button */}
      <div className="flexContainer blackBorder">
        <div className="blackBorder m-4">
          ActorLink
        </div>
      </div>

      {/* Game */}
      <div className="w-1/2 h-full blackBorder p-4 flex flex-col gap-4">
        
        <div className="flexContainer blackBorder p-4 gap-4">
          <button className="blackBorder p-4" onClick={ () => createNewGame() }>
            New Game
          </button>
          <button className="blackBorder p-4" onClick={ () => updateHardMode() }>
            Change to {hardMode ? "Easy" : "Hard"} Mode
          </button>
        </div>

        <GuessDisplay
          gameInfo={gameInfo} gameOver={gameOver} hardMode={hardMode} guesses={guesses}
        ></GuessDisplay>
        
        <Input
          className={gameOver ? "hidden" : ""}
          guess={guess} setGuess={setGuess} updateGuesses={updateGuesses}
        ></Input>
      
      </div>

      {/* Description */}
      <Description></Description>

      {/* Credits */}
      <div className="flexContainer blackBorder">
        <div className="blackBorder m-4">
          Made by Charlie
        </div>
      </div>

    </div>
  );

}