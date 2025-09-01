import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";

type ButtonElementProps = {
  element: "paper" | "scissors" | "rock";
  selected?: boolean;
  disabled?: boolean;
  shadow?: boolean;
  onClick?: () => void;
};

export default function ButtonElement({
  element,
  selected = false,
  disabled = false,
  shadow = false,
  onClick,
}: ButtonElementProps) {
  let icon;
  switch (element) {
    case "paper":
      icon = paper;
      break;
    case "scissors":
      icon = scissors;
      break;
    case "rock":
      icon = rock;
      break;
  }

  let color;
  switch (element) {
    case "paper":
      color = " bg-indigo-500 border-indigo-700";
      break;
    case "scissors":
      color = " bg-amber-500 border-amber-700";
      break;
    case "rock":
      color = " bg-rose-500 border-rose-700";
      break;
  }

  let buttonBorderClassName = `w-[130px] h-[130px] p-4 border-b-4 rounded-full overflow-hidden transition-all ${
    disabled ? "" : "hover:scale-105"
  }`;

  buttonBorderClassName += shadow ? " shadow-layers md:shadow-layers" : "";

  buttonBorderClassName += disabled ? "" : " cursor-pointer";

  buttonBorderClassName += selected
    ? " md:w-[200px] md:h-[200px] md:p-6  md:border-b-8 lg:w-[300px] lg:h-[300px] lg:p-9  lg:border-b-[12px]"
    : " md:w-[200px] md:h-[200px] md:p-6  md:border-b-8";

  buttonBorderClassName += color;

  let buttonInnerClassName = `flex justify-center items-center bg-white h-full w-full rounded-full border-t-4 md:border-t-6 border-gray-200`;
  buttonInnerClassName += selected ? " md:border-t-[12px]" : " md:border-t-6";

  return (
    <button
      className={buttonBorderClassName}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={buttonInnerClassName}>
        <img
          src={icon}
          alt={element}
          className={selected ? "lg:w-[120px] lg:h-[120px]" : ""}
        />
      </div>
    </button>
  );
}
