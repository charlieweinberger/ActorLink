import { Box, Typography, Stack, Button, Autocomplete } from "@mui/material";

function getMoviesToDisplay(currentGame: GameState) {

  const numGuesses = currentGame["guesses"].filter((guess: string) => guess !== "").length;
  const clues = currentGame["movieClues"].slice(0, numGuesses + 1);
  
  const moviesToDisplay: MovieToDisplay[] = [{ name: clues[0], type: "clue", color: "#ADD8E6" }];
  
  for (let i = 0; i < numGuesses; ++i) {
    moviesToDisplay.push({ name: clues[i + 1], type: "clue", color: "#ADD8E6" });
    moviesToDisplay.push({ name: currentGame["guesses"][i], type: "guess", color: "#FF7F50" });
  }

  return moviesToDisplay;

}

export default function Game({ gameState }: any) {
  return (
    <Box width="600px" height="550px" border="1px solid #333">

      {/* Movie clues & guesses */}
      <Stack>
        {
          getMoviesToDisplay(gameState).map((item: MovieToDisplay) => (
            <Box
              key={`${item.type}: ${item.name}`}
              width="100%"
              height="50px"
              className="flex"
              bgcolor={item.color}
            >
              <Typography variant="h6" color="#333" textAlign="center">{item.name}</Typography>
            </Box>
          ))
        }
      </Stack>

      {/* Input */}
      <Box height="50px" border="1px solid #333">
        {/* https://mui.com/material-ui/react-autocomplete/ */}
        {/* <Autocomplete></Autocomplete> */}
        {/* <Button></Button> */}
      </Box>

    </Box>
  );
}