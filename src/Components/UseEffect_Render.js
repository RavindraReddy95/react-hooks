import React, { useState, useEffect } from "react";

function UseEffect_Render() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    document.getElementById(
      "demo"
    ).innerHTML = `You Have CLicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Clicked {count} times
      </button>
      <p id="demo">{count}</p>
    </div>
  );
}

export default UseEffect_Render;
