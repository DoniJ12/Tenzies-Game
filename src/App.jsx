import Die from "./Die";
import { nanoid } from "nanoid";
import { useState } from "react";
function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const elements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
      id={dieObj.id}
    />
  ));

  function rollDice() {
    setDice((prevRoll) =>
      prevRoll.map((roll) =>
        roll.isHeld ? roll : { ...roll, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <main>
      <div className="dice-container">{elements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
