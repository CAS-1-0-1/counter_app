import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const artir = () => setCount(count + 1);

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sifirla = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <div className="counter-title">Counter App</div>

        <h1 className="count-display">{count}</h1>

        <div className="button-group">
          <button className="btn btn-azalt" onClick={azalt}>
            azalt
          </button>

          <button className="btn btn-artir" onClick={artir}>
            artır
          </button>

          <button className="btn btn-sifirla" onClick={sifirla}>
            sifirla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
