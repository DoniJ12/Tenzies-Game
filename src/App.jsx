import Die from "./Die";
import { use, useState } from "react";
function App() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const [dice, setDice] = useState(generateAllNewDice());

  const elements = dice.map((numbers) => <Die value={numbers} />);

  return (
    <main>
      <div className="dice-container">{elements}</div>
    </main>
  );
}

export default App;
