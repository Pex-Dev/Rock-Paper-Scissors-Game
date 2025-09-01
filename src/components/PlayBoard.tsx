import type { Choice } from "../types/GameTypes";
import { useGameContext } from "../context/GameContext";
import ButtonElement from "./ButtonElement";

export default function PlayBoard() {
  const { playerChoice, houseChoice, result, RestartGame } = useGameContext();

  const GetChoice = (choice: Choice, win: boolean = false) => {
    switch (choice) {
      case "paper":
        return (
          <ButtonElement
            element="paper"
            disabled={true}
            selected={true}
            shadow={win}
          />
        );
      case "rock":
        return (
          <ButtonElement
            element="rock"
            disabled={true}
            selected={true}
            shadow={win}
          />
        );
      case "scissors":
        return (
          <ButtonElement
            element="scissors"
            disabled={true}
            selected={true}
            shadow={win}
          />
        );
      default:
        return (
          <div className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-black/30 animate-scaling"></div>
        );
    }
  };

  const GetResult = () => {
    if (!result) return null;

    return (
      <div>
        <h2 className="text-white text-center uppercase text-5xl text-nowrap">
          {result}
        </h2>
        <button
          onClick={() => RestartGame()}
          className="bg-white text-neutral-400 hover:text-pink-700 hover:cursor-pointer uppercase rounded text-nowrap  py-3 px-14 mt-5 md:mt-8"
        >
          Play Again
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="flex gap-6 md:gap-15 w-full  ">
        <div className="w-full flex flex-col-reverse items-center justify-center md:flex-col gap-7 md:gap-15">
          <h2 className="text-white uppercase text-xl md:text-3xl">
            You picked
          </h2>
          {GetChoice(playerChoice, result === "you win")}
        </div>
        {result && (
          <div className="hidden md:flex flex-col justify-center">
            {GetResult()}
          </div>
        )}
        <div className="w-full flex flex-col-reverse items-center justify-center md:flex-col gap-7 md:gap-15">
          <h2 className="text-white uppercase text-xl md:text-3xl text-nowrap">
            The house picked
          </h2>
          {GetChoice(houseChoice, result === "you lose")}
        </div>
      </div>
      {result && (
        <div className="md:hidden flex justify-center mt-5 md:mt-0">
          {GetResult()}
        </div>
      )}
    </div>
  );
}
