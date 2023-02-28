import { useState } from "react";
import "../styles.css";

export function Task(props) {
  let task = props.task;
  let [isChecked, setChecked] = useState(false);
  let [buttonText, setButtonText] = useState("Mark as Done");

  let taskElement = (
    <div className="task">
      {/* <input
        type="checkbox"
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      ></input> */}
      <h3 style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {task}
      </h3>
      <button
        className={`done ${isChecked ? "red-btn" : "green-btn"}`}
        onClick={() => {
          setChecked(!isChecked);
          setButtonText(isChecked ? "Mark as Done" : "Undo");
        }}
      >
        {buttonText}
      </button>
    </div>
  );

  return taskElement;
}
