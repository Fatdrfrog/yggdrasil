import "./style.css";
import { Task1, Task2, Task3, Task4, Task5, Task6 } from "./Tasks";

export const Dialog = ({ task, handleSetConditions }) => {
  return (
    <div className="dialog">
      {task === 1 && <Task1 handleSetConditions={handleSetConditions} />}
      {task === 2 && <Task2 handleSetConditions={handleSetConditions} />}
      {task === 3 && <Task3 handleSetConditions={handleSetConditions} />}
      {task === 4 && <Task4 handleSetConditions={handleSetConditions} />}
      {task === 5 && <Task5 handleSetConditions={handleSetConditions} />}
      {task === 6 && <Task6 handleSetConditions={handleSetConditions} />}
    </div>
  );
};
