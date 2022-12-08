import "./App.css";
import { Dialog } from "./components/Dialog";
import { useState } from "react";

const conditionsData = {
  isAdvStarted: false,
  isFirstButtonPressed: false,
  firstTaskResult: 0,
  isSecondButtonPressed: false,
  secondTaskResult: 0,
  isAdvEnded: false,
};

function App() {
  const [conditions, setConditions] = useState(() => {
    const local = JSON.parse(localStorage.getItem("conditions"));
    if (local) return local;
    return conditionsData;
  });

  const [currentTask, setCurrentTask] = useState(() => {
    const local = JSON.parse(localStorage.getItem("task"));
    if (local) return local;
    return 0;
  });

  const handleSetConditions = (condition, data) => {
    const newConditions = { ...conditions };
    newConditions[condition] = data;
    setConditions({ ...newConditions });
    localStorage.setItem("task", JSON.stringify(currentTask));
    localStorage.setItem("conditions", JSON.stringify({ ...newConditions }));
  };

  const handleStartAgain = () => {
    window.location.reload();
    localStorage.clear();
  };

  const handleRemoveTask = () => {
    setCurrentTask(0);
    localStorage.setItem("task", JSON.stringify(""));
  };

  console.log(conditions, currentTask);
  return (
    <div className="container">
      {currentTask && (
        <Dialog
          task={currentTask}
          handleSetConditions={handleSetConditions}
          handleRemoveTask={handleRemoveTask}
        />
      )}

      <button className="button" onClick={handleStartAgain}>
        Start again!
      </button>
      <div className="image">
        <button
          className="button start"
          onClick={() => handleSetConditions("isAdvStarted", true)}
          disabled={conditions.isAdvStarted}
        >
          Help Aldar to find the magic apple
        </button>

        {conditions.isAdvStarted && (
          <div className="sub-tree">
            <button
              className="button btn1"
              onClick={() => {
                handleSetConditions("isFirstButtonPressed", 1);
                setCurrentTask(1);
              }}
              disabled={conditions.isFirstButtonPressed}
            >
              What is going on here?
            </button>

            {conditions.firstTaskResult && (
              <div className="sub-tree" style={{ top: "30%" }}>
                <button
                  className="button btn2"
                  onClick={() =>
                    handleSetConditions("isSecondButtonPressed", 2)
                  }
                  disabled={conditions.isSecondButtonPressed}
                >
                  Hunters eating something
                </button>
                <button
                  className="button btn3"
                  onClick={() =>
                    handleSetConditions("isSecondButtonPressed", 3)
                  }
                  disabled={conditions.isSecondButtonPressed}
                >
                  Girl with very long hairs
                </button>
                <button
                  className="button btn4"
                  onClick={() =>
                    handleSetConditions("isSecondButtonPressed", 4)
                  }
                  disabled={conditions.isSecondButtonPressed}
                >
                  Bai doing bai stuff
                </button>

                {conditions.secondTaskResult && (
                  <div className="sub-tree" style={{ top: "40%" }}>
                    <button
                      className="button btn5"
                      onClick={() =>
                        handleSetConditions("isThirdButtonPressed", 5)
                      }
                      disabled={conditions.isThirdButtonPressed}
                    >
                      An apple dropped...
                    </button>
                    <button
                      className="button btn6"
                      onClick={() =>
                        handleSetConditions("isThirdButtonPressed", 6)
                      }
                      disabled={conditions.isThirdButtonPressed}
                    >
                      "Apple" noises
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
