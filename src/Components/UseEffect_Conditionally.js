import React, { useState, useEffect } from "react";

function UseEffect_Conditionally() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Counts Updated");
    document.getElementById(
      "demo"
    ).innerHTML = `You Have CLicked ${count} times`;
  }, []);
  useEffect(() => {
    console.log("Details Updated");
  }, [name]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        {" "}
        Clicked {count} times
      </button>
      <p id="demo">{count}</p>
    </div>
  );
}

export default UseEffect_Conditionally;
