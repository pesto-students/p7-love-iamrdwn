import { Task } from "./Task";

export function TaskList(props) {
  let tasks = props.value;

  if (tasks.length == 0) {
    return (
      <div>
        <img className="bgImg" src="/images/done.png" />
        <p>Go ahead and add some tasks, please!</p>
      </div>
    );
  }

  function generateTaskDivs(task) {
    return <Task task={task} />;
  }

  let tasksDiv = <div>{tasks.map(generateTaskDivs)}</div>;

  return tasksDiv;
}
