import "./App.css";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Rules from "./components/Rules";
import { useGameContext } from "./context/GameContext";

function App() {
  const { score } = useGameContext();
  return (
    <main className="font-barlow-semicondensed p-8 min-h-dvh flex flex-col">
      <ScoreBoard score={score} />
      <div className="flex-1 flex justify-center items-center mt-10">
        <GameBoard />
      </div>
      <Rules />
    </main>
  );
}

export default App;
