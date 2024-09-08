import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  const setIncrement = () => {
    setCount(count + incrementBy);
  };
  const setDecrement = () => {
    if (count > 0) setCount(count - incrementBy);
  };
  const increaseIncrement = () => {
    setIncrementBy(incrementBy + 1);
  };
  const decreaseIncrement = () => {
    setIncrementBy(incrementBy - 1);
  };

  return (
    <div>
      <h1>Count value is : {count}</h1>
      <br />
      <button onClick={setIncrement}>Добавить</button>
      <button onClick={setDecrement}>Убавить</button>
      <hr />
      <br />
      <h1>We are incrementing the value by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>increase increment</button>
      <button onClick={decreaseIncrement}>decrease increment</button>
    </div>
  );
}
