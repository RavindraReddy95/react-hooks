import "./App.css";
import React from "react";
// import ComponentC from "./UseContext/ComponentC";
import ReducerOne from "./Reducers/ReducerOne";
import ReducerTwo from "./Reducers/ReducerTwo";
import DataFetchingOne from "./Reducers/DataFetchingOne";
import DataFetchingTwo from "./Reducers/DataFetchingTwo";

function App() {
  return (
    <div className="App">
      {/* <ReducerOne /> */}
      {/* <ReducerTwo /> */}
      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

//  <UserContext.Provider value={"Ravindra Reddy"}>
//    <ChannelContext.Provider value={"React Developer"}>
//      <ComponentC />
//    </ChannelContext.Provider>
//  </UserContext.Provider>;

