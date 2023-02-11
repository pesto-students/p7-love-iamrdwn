import "./styles.css";
import { useState } from "react";
import { TaskList } from "./components/TaskList";

export default function App() {
  let [taskList, setTaskList] = useState([]);

  function addTasktoTaskList(event) {
    event.preventDefault();

    let formdata = new FormData(event.target);

    let task = Object.fromEntries(formdata.entries());

    if (task.todo === "") {
      alert("Please enter a task");
    } else {
      setTaskList([...taskList, task.todo]);
    }
  }

  return (
    <div className="App">
      <h1>things to do</h1>
      <form
        onSubmit={addTasktoTaskList}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <input name="todo" type="text"></input>
        <button className="add_task" type="submit">
          Add Task
        </button>
      </form>
      <TaskList value={taskList} />
    </div>
  );
}
