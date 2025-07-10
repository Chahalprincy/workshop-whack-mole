import {GameProvider} from "./GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";
import { useGame } from "./GameContext";

function App() {
  return (
    <GameProvider> 
      <Main />
    </GameProvider>
  );
}

function Main() {
  const {isPlaying} = useGame();
  return isPlaying ? <GameBoard/> : <WelcomeScreen/>
}

export default App;