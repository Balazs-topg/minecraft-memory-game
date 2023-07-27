import { useState, useEffect } from "react";
import StartMenue from "./components/start-menue";
import Game from "./components/game";

function App() {
  const [audioIsEnabled, setAudioIsEnabled] = useState(true);
  const [infoIsShowing, setInfoIsShowing] = useState(true);
  const [difficulty, setDifficulty] = useState("none");

  //  useEffect(() => {
  //    if (difficulty !== "none") {
  //    }
  //  }, [difficulty]);

  function playClickSound(type = "click") {
    if (type == "click") {
      let audio = new Audio("../public/minecraft-click.mp3");
      if (audioIsEnabled) {
        audio.play();
      }
    }
    if (type == "oof") {
      let audio = new Audio("../public/minecraft-oof.wav");
      if (audioIsEnabled) {
        audio.play();
      }
    }
    if (type == "level-up") {
      let audio = new Audio("../public/minecraft-level-up.mp3");
      if (audioIsEnabled) {
        audio.play();
      }
    }
  }

  return (
    <>
      <StartMenue playClickSound={playClickSound} setAudioIsEnabled={setAudioIsEnabled} audioIsEnabled={audioIsEnabled} infoIsShowing={infoIsShowing} setInfoIsShowing={setInfoIsShowing} difficulty={difficulty} setDifficulty={setDifficulty} />
      <Game setDifficulty={setDifficulty} difficulty={difficulty} playClickSound={playClickSound}></Game>
    </>
  );
}

export default App;
