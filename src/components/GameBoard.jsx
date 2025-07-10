import { useGame } from "../GameContext";
import Hole from "./Hole";

function GameBoard() {
  const {
    score,
    molePosition,
    numHoles,
    whackMole,
    restartGame,
  } = useGame();

  return (
    <section>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>

      <div className="board">
        {Array.from({ length: numHoles }).map((_, index) => (
          <Hole
            key={index}
            index={index}
            hasMole={index === molePosition}
            onWhack={whackMole}
          />
        ))}
      </div>
    </section>
  );
}

export default GameBoard;