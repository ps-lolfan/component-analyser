import React, { useState } from "react";

export default function Counter({ start }) {
  const [count, setCount] = useState(start);
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
