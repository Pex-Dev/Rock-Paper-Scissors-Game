import { createContext, useContext, useEffect, useState } from "react";
import {
  GetScoreFromLocalStorage,
  SetScoreToLocalStorage,
} from "../utilities/LSManager";

import type { Choice } from "../types/GameTypes";

type GameState = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  playerChoice: Choice;
  setPlayerChoice: React.Dispatch<React.SetStateAction<Choice>>;
  houseChoice: Choice;
  StartGame: (choice: Choice) => void;
  gameStatus: "choosing" | "playing";
  result: "you win" | "you lose" | "draw" | null;
  RestartGame: () => void;
};

//Crear context
const GameContext = createContext<GameState | null>(null);

export default function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [gameStatus, setGameStatus] = useState<"choosing" | "playing">(
    "choosing"
  );
  const [score, setScore] = useState(GetScoreFromLocalStorage());
  const [playerChoice, setPlayerChoice] = useState<Choice>(null);
  const [houseChoice, setHouseChoice] = useState<Choice>(null);
  const [result, setResult] = useState<"you win" | "you lose" | "draw" | null>(
    null
  );

  const StartGame = (choice: Choice) => {
    setPlayerChoice(choice);
    setGameStatus("playing");
  };

  useEffect(() => {
    if (playerChoice !== null) {
      HousePick();
    }
  }, [playerChoice]);

  useEffect(() => {
    if (houseChoice !== null) {
      setTimeout(() => {
        GameResults();
      }, 1000);
    }
  }, [houseChoice]);

  const HousePick = () => {
    setTimeout(() => {
      const choices: Choice[] = ["rock", "paper", "scissors"];
      const housePicked: Choice = choices[GetRandomInt(0, 3)];
      setHouseChoice(housePicked);
    }, 2000);
  };

  const GameResults = () => {
    if (playerChoice === null || houseChoice === null) return;

    const rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (playerChoice === houseChoice) {
      setResult("draw");
      return;
    }

    if (rules[playerChoice] === houseChoice) {
      setResult("you win");
      setScore((prev) => prev + 1);
      SetScoreToLocalStorage(score + 1);
    } else {
      setResult("you lose");
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
      SetScoreToLocalStorage(score > 0 ? score - 1 : 0);
    }
  };

  const RestartGame = () => {
    setGameStatus("choosing");
    setPlayerChoice(null);
    setHouseChoice(null);
    setResult(null);
  };

  const GetRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        playerChoice,
        setPlayerChoice,
        houseChoice,
        StartGame,
        gameStatus,
        result,
        RestartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameContext must be used within a GameProvider");
  return context;
}
