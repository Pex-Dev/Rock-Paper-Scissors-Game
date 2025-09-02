import { useState } from "react";
import rules from "../assets/images/image-rules.svg";
import iconClose from "../assets/images/icon-close.svg";

export default function Rules() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center md:justify-end items-center mt-10 mb-8">
        <button
          onClick={() => setShowModal(true)}
          aria-label="Open rules modal"
          className="text-white uppercase outline-2 outline-slate-500 rounded px-10 py-1 hover:outline-slate-200 cursor-pointer transition-colors"
        >
          Rules
        </button>
      </div>
      {showModal && (
        <div className="absolute top-0 left-0  min-h-dvh min-w-dvw bg-black/50 flex justify-center items-center z-10">
          <div className="bg-white p-8 flex flex-col justify-between md:w-[400px] min-h-dvh min-w-dvw md:min-h-auto md:min-w-auto md:h-[400px] md:rounded-md">
            <header className="flex mt-10 md:mt-0 justify-between items-center">
              <h2 className="uppercase text-slate-700 text-4xl text-center">
                Rules
              </h2>
              <button
                className="font-barlow-semicondensed"
                aria-label="Close rules modal"
                onClick={() => setShowModal(false)}
              >
                <img src={iconClose} alt="Close" />
              </button>
            </header>
            <img
              src={rules}
              alt="Game Rules"
              className="mt-4 max-w-[315px] mx-auto"
            />
            <button
              className="font-barlow-semicondensed mb-10 mx-auto md:hidden"
              aria-label="Close rules modal"
              onClick={() => setShowModal(false)}
            >
              <img src={iconClose} alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
