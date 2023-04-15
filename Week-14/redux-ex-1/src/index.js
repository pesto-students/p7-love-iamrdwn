import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { off, on } from "./actions/index";
export default function Room() {
  let reduxState = useSelector((stateX) => stateX.toggle);
  let dispatch = useDispatch();

  // let [state, setState] = useState({ isLightOn: true });

  function flipLight() {
    if (reduxState.isLightOn) {
      dispatch(off());
      // console.log(`Inside ${reduxState}`);
    } else {
      dispatch(on());
      // console.log(reduxState);
    }
  }

  const lightedness = reduxState.isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,

  document.getElementById("root")
);
