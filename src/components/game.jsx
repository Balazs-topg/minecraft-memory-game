import { useState, useEffect } from "react";
import backgroundBrick from "/public/stone-bricks.webp";

function Game({ difficulty, setDifficulty, playClickSound }) {
  const [listOfCards, setListOfCards] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState([]);

  useEffect(() => {
    setListOfCards([]);
    setClickedItems([]);
    setNumberOfCards([]);
  }, [difficulty]);

  useEffect(() => {
    if (clickedItems.length === numberOfCards) {
      console.log("youve won");
      playClickSound("level-up");
    }
  }, [clickedItems]);

  function handleGameMechanics(text) {
    let shuffledArray = shuffle(listOfCards);
    console.log(shuffledArray);
    setListOfCards(shuffledArray);

    if (clickedItems.includes(text)) {
      console.log("you alredy clicked this!! restarting!");
      playClickSound("oof");
      setClickedItems([]);
    } else {
      playClickSound();
      setClickedItems((clickedItems) => [...clickedItems, text]);
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  function Card({ text }) {
    return (
      <div
        onClick={() => {
          handleGameMechanics(text);
        }}
        className="bg-slate-200 animate-flip select-none h-28 w-40 rounded-md shadow-lg text-black text-center flex justify-center items-center transition-all active:scale-95"
      >
        {text}
      </div>
    );
  }
  function randomNumbersWithoutDuplicates(howMany) {
    let array = [];
    let validIterations = 0;
    while (validIterations < howMany) {
      let currentRandomNumber = Math.floor(Math.random() * 700 + 1);
      if (!array.includes(currentRandomNumber)) {
        array.push(currentRandomNumber);
        validIterations += 1;
      }
    }
    return array;
  }

  useEffect(() => {
    if (difficulty === "Easy") {
      setNumberOfCards(8);
      let ourNumber = randomNumbersWithoutDuplicates(8);
      fetch("https://minecraft-ids.grahamedgecombe.com/items.json")
        .then((response) => response.json())
        .then((data) => setListOfCards([data[ourNumber[0]].name, data[ourNumber[1]].name, data[ourNumber[2]].name, data[ourNumber[3]].name, data[ourNumber[4]].name, data[ourNumber[5]].name, data[ourNumber[6]].name, data[ourNumber[7]].name]));
    }
    if (difficulty === "Medium") {
      setNumberOfCards(12);
      let ourNumber = randomNumbersWithoutDuplicates(12);
      fetch("https://minecraft-ids.grahamedgecombe.com/items.json")
        .then((response) => response.json())
        .then((data) => setListOfCards([data[ourNumber[0]].name, data[ourNumber[1]].name, data[ourNumber[2]].name, data[ourNumber[3]].name, data[ourNumber[4]].name, data[ourNumber[5]].name, data[ourNumber[6]].name, data[ourNumber[7]].name, data[ourNumber[8]].name, data[ourNumber[9]].name, data[ourNumber[10]].name, data[ourNumber[11]].name]));
    }
    if (difficulty === "Hard") {
      setNumberOfCards(16);
      let ourNumber = randomNumbersWithoutDuplicates(16);
      fetch("https://minecraft-ids.grahamedgecombe.com/items.json")
        .then((response) => response.json())
        .then((data) => setListOfCards([data[ourNumber[0]].name, data[ourNumber[1]].name, data[ourNumber[2]].name, data[ourNumber[3]].name, data[ourNumber[4]].name, data[ourNumber[5]].name, data[ourNumber[6]].name, data[ourNumber[7]].name, data[ourNumber[8]].name, data[ourNumber[9]].name, data[ourNumber[10]].name, data[ourNumber[11]].name, data[ourNumber[12]].name, data[ourNumber[13]].name, data[ourNumber[14]].name, data[ourNumber[15]].name]));
    }
  }, [difficulty]);

  if (difficulty !== "none") {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${backgroundBrick})`,
            backgroundSize: "64px",
          }}
          className="text-white h-screen font-minecraft"
        >
          <div className="h-full w-full bg-slate-900 bg-opacity-50 flex flex-col items-center p-8 gap-4">
            <div className="flex justify-between w-full">
              <button
                className="border-2 rounded-md p-2"
                onClick={() => {
                  playClickSound();
                  setDifficulty("none");
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </button>
              <h1>
                score: {clickedItems.length}/{listOfCards.length}
              </h1>
              <h1>{difficulty}</h1>
            </div>

            <div className="bg-slate-800 bg-opacity-25 backdrop-blur-sm rounded-xl border-2 flex justify-center items-center gap-2 p-4">
              <div className="flex flex-wrap gap-2">
                {listOfCards.map((item) => (
                  <Card key={item} text={item}></Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Game;
