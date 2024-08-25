import ALL_MOVIES from "../../data/allMovies";

export default function Input({ guess, setGuess, updateGuesses }: any): JSX.Element {

  const sortMovies = () => {
    return Object.keys(ALL_MOVIES).filter((movie: string) => {
      return movie.toLowerCase().includes(guess.toLowerCase())
    })
  }

  const validateGuess = () => {
    if (Object.keys(ALL_MOVIES).includes(guess)) {
      console.log("includes");
      updateGuesses();
      setGuess("");
    } else {
      // display error message telling user to choose a movie from the list
      // alternative: make input box outline red, add shaking animation
      console.log("not includes");
    }
  }

  // // TODO: add arrow navigation feature
  // const handleEnterKey = (event: any) => {
  //   if (event.key === "Enter" && !event.shiftKey) {
  //     validateGuess();
  //   } 
  // }

  return (
    <div className="flexContainer blackBorder p-4 gap-4">

      {/* Combobox */}
      <div className="flexContainer flex-col group">

        {/* Text input*/}
        <input
          className="flexContainer blackBorder placeholder:text-gray-400 w-60 p-2 outline-none"
          type="text"
          value={guess}
          placeholder="Guess a movie!"
          onChange={(e) => setGuess(e.target.value)}
          // onKeyDown={handleEnterKey}
        />
        
        {/* Dropdown menu */}
        <div className="hidden group-hover:block">
          <ul className="blackBorder overflow-y-auto w-60 max-h-52 empty:hidden">
            {
              sortMovies().map((movie: string) => (
                <li
                  key={movie}
                  className="p-2 odd:white even:bg-blue-100 hover:bg-blue-500 hover:text-white"
                  onClick={() => setGuess(movie)}
                >
                  {movie}
                </li>
              ))
            }
          </ul>
        </div>

      </div>

      {/* Submit button */}
      <button className="blackBorder p-2 bg-blue-500" onClick={validateGuess}>
        Guess
      </button>

    </div>
  );
};