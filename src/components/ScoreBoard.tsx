import logo from "../assets/images/logo.svg";

export default function ScoreBoard({ score }: { score: number }) {
  return (
    <header className="outline-2 md:outline-4 outline-slate-500 rounded p-3 flex justify-between items-center w-full max-w-[700px] mx-auto">
      <img
        src={logo}
        alt="rock paper scissors"
        className="h-[60px] md:h-auto"
      />
      <p className="bg-white rounded-sm md:text-base flex flex-col w-fit text-blue-700 uppercase text-xs py-3 md:py-5 px-6 md:px-10 items-center h-fit">
        score
        <span className="text-slate-700 text-4xl md:text-6xl font-bold">
          {score}
        </span>
      </p>
    </header>
  );
}
