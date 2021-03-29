import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Plain empty context
const RoomContext = React.createContext();

function RoomStore({ children }) {
  //state of room
  const [isLit, setLit] = useState(false);

  const toggleLight = () => {
    setLit(!isLit);
  };

  //passing down state and the ToggleLight action
  return (
    <RoomContext.Provider value={{ isLit, onToggleLight: toggleLight }}>
      {children}
    </RoomContext.Provider>
  );
}

//Receive the state of ligt and function to
//toggle the light, from RoomContext
const Room = () => {
  const { isLit, onToggleLight } = useContext(RoomContext);

  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      The room is {isLit ? "lit" : "dark"}.
      <br />
      <button onClick={onToggleLight}>Flip</button>
    </div>
  );
};

const App = () => (
  <div className="app">
    <Room />
  </div>
);
//wrap whole app in the RoomStore
ReactDOM.render(
  <RoomStore>
    <App />
  </RoomStore>,
  document.getElementById("root")
);
