import "./style.css";
import { Task1, Task2, Task3, Task4, Task5, Task6 } from "./Tasks";

export const Dialog = ({
  task,
  handleSetConditions,
  handleRemoveTask,
  conditions,
}) => {
  return (
    <div className="dialog">
      {task === 1 && (
        <Task1
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
        />
      )}
      {task === 2 && (
        <Task2
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
        />
      )}
      {task === 3 && (
        <Task3
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
        />
      )}
      {task === 4 && (
        <Task4
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
        />
      )}
      {task === 5 && (
        <Task5
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
          condition={conditions.secondTaskResult}
        />
      )}
      {task === 6 && (
        <Task6
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
          condition={conditions.thirdTaskResult}
        />
      )}
    </div>
  );
};
