// In This Effect We should Run The Effect Only Once

import React, { useState, useEffect } from "react";

function UseEffect_RunOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("Co-ordinates are working");
    window.addEventListener("mouseover", logMousePosition);

    return () => {
      window.removeEventListener("mouseover", logMousePosition);
      console.log("Event Removed");
    };
  }, []);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      <h2> X - {x}</h2>
      <h2> Y - {y}</h2>
    </div>
  );
}

export default UseEffect_RunOnce;
