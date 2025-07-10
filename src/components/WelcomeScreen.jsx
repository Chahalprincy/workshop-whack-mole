import { useGame } from "../GameContext";

function WelcomeScreen() {

    const {startGame} = useGame();

    return (
        <section>
            <h1>Whack-a-Mole</h1>
            <button onClick= {startGame} >start Game</button>
        </section>
    )
}

export default WelcomeScreen;