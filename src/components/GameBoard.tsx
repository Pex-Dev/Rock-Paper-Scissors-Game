import { useGameContext } from "../context/GameContext";
import SelectBoard from "./SelectBoard";
import PlayBoard from "./PlayBoard";

export default function GameBoard() {
  const { gameStatus } = useGameContext();

  return (
    <div className="flex-1 flex justify-center items-center mt-10">
      {gameStatus === "choosing" && <SelectBoard />}
      {gameStatus === "playing" && <PlayBoard />}
    </div>
  );
}
