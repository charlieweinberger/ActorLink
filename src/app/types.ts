interface PossibleGame {
  movieClues: string[];
  actorClues: string[][];
  answer: string;
}

interface GameState {
  movieClues: string[];
  actorClues: string[][];
  guesses: string[];
  answer: string;
}

interface MovieToDisplay {
  name: string;
  type: string,
  color: string
}

interface Movies {
  [id: string]: string[];
}