import InfoBar from "./info-bar";
import ToggleSound from "./toggle-sound";
import background from "/public/dirt.webp";
import logo from "/public/logo.png";

function StartMenue({ playClickSound, setAudioIsEnabled, audioIsEnabled, infoIsShowing, setInfoIsShowing, difficulty, setDifficulty }) {
  if (difficulty === "none") {
    return (
      <div
        style={{
          backgroundImage: `url(${background}`,
          backgroundSize: "64px",
        }}
        className="text-black h-screen font-minecraft"
      >
        <div className="h-full w-full bg-slate-900 bg-opacity-50 flex justify-center">
          <div className="flex flex-col gap-4 items-center justify-center text-white text-xl">
            <div className="relative">
              <img src={logo} alt="" className="h-28" />
              <div className="drop-shadow-xl">
                <h1 className="text-yellow-400 drop-shadow-[2px_2px_0px_rgba(255,120,1,0.7)] text-3xl translate-x-10 animate-grow-shrink absolute right-0 bottom-0 rotate-12">Memory Game!</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center text-white text-xl md:w-96 w-full p-4">
              <Btn playClickSound={playClickSound} text={"Easy"} setDifficulty={setDifficulty} />
              <Btn playClickSound={playClickSound} text={"Medium"} setDifficulty={setDifficulty} />
              <Btn playClickSound={playClickSound} text={"Hard"} setDifficulty={setDifficulty} />
              <div className="max-w-xl mr-auto">
                <ToggleSound audioIsEnabled={audioIsEnabled} setAudioIsEnabled={setAudioIsEnabled} playClickSound={playClickSound}></ToggleSound>
              </div>
              <InfoBar infoIsShowing={infoIsShowing} setInfoIsShowing={setInfoIsShowing} playClickSound={playClickSound} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StartMenue;

function Btn({ playClickSound, text, setDifficulty }) {
  return (
    <button
      onClick={() => {
        playClickSound();
        setDifficulty(text);
      }}
      className="bg-slate-400 w-full shadow-inner border-t-2 border-l-2 rounded-md border-slate-300 max-w-xl transition-all hover:scale-105 active:scale-95 active:bg-sky-300"
    >
      <div className="border-b-2 border-r-2 border-slate-500 rounded-md p-2 ">
        <div className="drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">{text}</div>
      </div>
    </button>
  );
}
