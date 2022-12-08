import "./style.css";
import { Task1, Task2, Task3, Task4, Task5, Task6 } from "./Tasks";

export const Dialog = ({ task }) => {
  return (
    <div className="dialog">
      {task === 1 && <Task1 />}
      {task === 2 && <Task2 />}
      {task === 3 && <Task3 />}
      {task === 4 && <Task4 />}
      {task === 5 && <Task5 />}
      {task === 6 && <Task6 />}
    </div>
  );
};
