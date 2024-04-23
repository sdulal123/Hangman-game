import { useState } from "react";
import words from "./englishWords.json";
import { Keyboard } from "./layout/keyboard";
import { HangmanWord } from "./layout/hangmanWord";
import { HangmanFigure } from "./layout/hangmanFigure";


function App() {
  const [wordToGuess, setWordToGuess] = useState (() => {
    return words[Math.floor(Math.random()* words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  
  return (
  <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap:"2rem",
      alignItems: "center"
    }}  
  >
    <div style={{fontSize: "2rem", textAlign: "center"}}>Guess the Words!</div>
    <HangmanFigure />
    <HangmanWord />
    <Keyboard />
  </div>
)
}

export default App
