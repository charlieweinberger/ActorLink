"use client";

// Imports

import { useState } from "react";

import Game from "./../components/game";
import Description from "./../components/description";

import POSSIBLE_GAMES from "./../data/possibleGames";
import All_MOVIES from "./../data/allMovies";

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

  const [ runGame, setRunGame ] = useState(false);
  const [ hardMode, setHardMode ] = useState(true); // Should be false, is only true for testing
  const [ gameInfo, setGameInfo ] = useState<GameInfo>({
    "movieClues": ["", "", "", "", ""],
    "actorClues": [ [""], [""], [""], [""], [""] ],
    "answer": ""
  });

  const updateRunGame = () => {
    setRunGame(true);
    setGameInfo(initializeGame());
  }

  const updateHardMode = () => {
    setHardMode(!hardMode);
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

      {/* Buttons */}
      <div className="flexContainer blackBorder gap-4">

        {/* New game button */}
        <button className="blackBorder p-4" onClick={ () => updateRunGame() }>
          New Game
        </button>

        {/* Change difficulty button */}
        <button className="blackBorder p-4" onClick={ () => updateHardMode() }>
          Change to {hardMode ? "Easy" : "Hard"} Mode
        </button>
      
      </div>

      {/* Game */}
      {runGame ? <Game gameInfo={gameInfo} hardMode={hardMode} /> : <Description></Description>}
      
      {/* Credits */}
      <div className="flexContainer blackBorder">
        <div className="blackBorder m-4">
          Made by Charlie
        </div>
      </div>

    </div>
  );

}