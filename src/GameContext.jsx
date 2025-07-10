import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({children}) {
    const [score,setScore] = useState(0)
    const [isPlaying,setPlay] = useState(false)
    const [molePosition,setMolePosition] = useState(0)
    const numHoles = 9

    function startGame() {
        setPlay(true);
        setScore(0);
        setMolePosition(randomHoleIndex());

    }

    function randomHoleIndex() {
        return Math.floor(Math.random() * numHoles);
    }

    function whackMole() {
        setScore((prev) => prev+1);
        setMolePosition(randomHoleIndex());

    }

    function restartGame() {
        setPlay(false);
        setScore(0);
    }

    const value = {score, isPlaying,molePosition, startGame,numHoles,setMolePosition,setScore, whackMole, restartGame}

    return (
        <GameContext.Provider value={value}>{children}</GameContext.Provider>
        
    )
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}