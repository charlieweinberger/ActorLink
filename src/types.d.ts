interface GameInfo {
  movieClues: string[];
  actorClues: string[][];
  answer: string;
}

interface Movies {
  [id: string]: string[];
}
type UseState<T> = Dispatch<SetStateAction<T>>
type UpdateUseState = () => Promise<void>