import { useGameContext } from "../context/GameContext";
import triangle from "../assets/images/bg-triangle.svg";
import ButtonElement from "./ButtonElement";

export default function SelectBoard() {
  const { StartGame } = useGameContext();

  return (
    <div className="w-[312px] h-[270px] md:w-[470px] md:h-[450px] relative flex flex-col justify-center items-center">
      <img
        src={triangle}
        alt="background triangle"
        className="absolute w-[200px] md:w-[300px] -z-10"
      />
      <div className="w-full h-full flex justify-between">
        <ButtonElement element="paper" onClick={() => StartGame("paper")} />
        <ButtonElement
          element="scissors"
          onClick={() => StartGame("scissors")}
        />
      </div>
      <div className="w-full h-full flex justify-center">
        <ButtonElement element="rock" onClick={() => StartGame("rock")} />
      </div>
    </div>
  );
}
