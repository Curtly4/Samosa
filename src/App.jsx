import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 2);
      setCount(count - 1000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Samosa Selector</h1>
        <h2 className="Counter-title">Count:{count}</h2>
        <img
          onClick={updateCount}
          className="samosa"
          src="src/assets/samosa.png"
          alt="Samosa Selector"
        ></img>
      </header>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Reset</h3>
          <button
            onClick={() => {
              setMultiplier(1);
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
