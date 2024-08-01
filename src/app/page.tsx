"use client";

// Imports

import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import Game from "./../components/game";

import POSSIBLE_GAMES from "./../data/possibleGames";
import All_MOVIES from "./../data/allMovies";

// React helper functions

function initializeGame() {

  const randomGame: PossibleGame = POSSIBLE_GAMES[Math.floor(Math.random() * POSSIBLE_GAMES.length)];
  const randomOrder: number[] = getRandomOrder();

  const gameState: GameState = {
    "movieClues": sortArray(randomGame["movieClues"], randomOrder),
    "actorClues": sortArray(randomGame["actorClues"], randomOrder),
    "guesses": ["", "", "", "", ""],
    "answer": randomGame["answer"]
  };
    
  return gameState;

}

function getRandomOrder() {
  let array = [0, 1, 2, 3, 4];
  for (let i = 4; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sortArray(inputArray: any[], randomOrder: number[]) {
  const tempArray = [];
  for (let i of randomOrder) {
    tempArray.push(inputArray[i]);
  }
  return tempArray;
}

// Main JSX element to return

export default function Home() {
  
  // React

  const [ runGame, setRunGame ] = useState(false); // should be false, only true for testing
  const [ gameState, setGameState ] = useState({ "movieClues": [""], "actorClues": [ [""], [""], [""], [""], [""] ], "guesses": ["", "", "", "", ""], "answer": "" });

  const updateRunGame = () => {
    setRunGame(true);
    setGameState(initializeGame());
  }

  // JSX

  return (
    <Box width="100vw" height="100vh" className="flex" flexDirection="column" gap={2}>

      {/* Title button */}
      <Box>
        <Typography variant="h3" color="#333">
          ActorLink
        </Typography>
      </Box>

      {/* New game button */}
      <Button variant="contained" onClick={ () => updateRunGame() }>
        New Game
      </Button>

      {/* Game */}
      {runGame ? <Game gameState={gameState} /> : ""}
      
    </Box>
  );

}