import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addStep, resetSteps } from "./actions/index";

export default function App() {
  let state = useSelector((statex) => statex.walkCounter);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <h3>You have walked {state} steps today</h3>
      <button
        className="purple-button"
        onClick={() => {
          dispatch(addStep());
        }}
      >
        Add Step
      </button>
      <button className="grey-button" onClick={() => dispatch(resetSteps())}>
        Reset Steps
      </button>
    </div>
  );
}
