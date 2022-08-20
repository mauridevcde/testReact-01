import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  const handledAdd = () => {
    setCount(count + 1);
  };
  const handledRestar = () => {
    setCount(count - 1);
  };
  const handledReset = () => {
    setCount(value);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      {<h2>{count}</h2>}
      <button onClick={handledAdd}>+1</button>
      <button onClick={handledRestar}>-1</button>
      <button id="btnReset" data-testid="btnReset" onClick={handledReset}>Reset</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
