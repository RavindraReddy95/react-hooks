import React, { useState } from "react";
import UseEffect_RunOnce from "./UseEffect_RunOnce";

function UseEffect_CleanUo() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Click Here</button>
      {display && <UseEffect_RunOnce />}
    </div>
  );
}

export default UseEffect_CleanUo;
