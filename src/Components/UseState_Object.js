import React, { useState } from "react";

function UseState_Object() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h2>First Name is : {name.firstName}</h2>
      <h2>Last Name is : {name.lastName}</h2>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default UseState_Object;
