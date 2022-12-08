import { useState, useEffect } from "react";

export const Task1 = ({ handleSetConditions, handleRemoveTask }) => {
  const handleFindAnswer = (event) => {
    const conditionValue =
      event.target.value === "Arrow noises"
        ? 2
        : event.target.value === "Song"
        ? 3
        : 4;
    handleSetConditions("firstTaskResult", conditionValue);
    handleRemoveTask();
  };

  return (
    <>
      <p>
        An apple just dropped again somewhere. And you hear some sources of
        different sounds coming from branches below. Where should you go?
      </p>
      <select
        className="button"
        style={{ top: "50%" }}
        onChange={handleFindAnswer}
        placeholder="Select from below..."
      >
        <option style={{ background: "white" }}>Select from below...</option>
        <option>Arrow noises</option>
        <option>Song</option>
        <option>laughing out loud</option>
      </select>
    </>
  );
};

export const Task2 = ({ handleSetConditions, handleRemoveTask }) => {
  // you should use secondTaskResult with value of 2 here

  const handleFindAnswer = (event) => {
    console.log("you should find if the typed input is equal to 495..");
  };

  return (
    <>
      <p>
        Hunters eating 1kg of apples. One is going to drop from their pockets...
        <br />
        After a while they begin to notice you: shall you be our guest and help
        us with some calculations here:
        <br /> What is a 1kg cost of an apples? If you will not answer correctly
        they are going to make you an apple... <br />
        <br />
        Ans: 495tg
      </p>
      <input
        className="button"
        style={{ top: "60%" }}
        onChange={handleFindAnswer}
      />
    </>
  );
};

export const Task3 = ({ handleSetConditions, handleRemoveTask }) => {
  //y ou should use secondTaskResult with value of 3 if left was picked, and 33 if right was picked

  return (
    <>
      You see one girl, she says that she is Kyz Zhibek, and because of too long
      hairs she couldn't concentrate on some falling apples. <br /> Maybe you
      should look to the left branch, she heard some sounds with "apple"
      involved on them.. Or You might pick the right branch, cause, you know,
      why not. Anyway, she is going to join you in finding this interesting
      magic apple
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button>Pick left</button> <button>Pick right</button>
      </div>
    </>
  );
};

export const Task4 = ({ handleSetConditions, handleRemoveTask }) => {
  // you should use secondTaskResult with value of 4 here
  return (
    <>
      <p>
        Hunters eating 1kg of apples. One is going to drop from their pockets.
        They see you and asks: what is a 1kg cost of an apples? If you will not
        answer correctly they are going to make you an apple... ans: 495tg
      </p>
      <input onChange={handleFindAnswer} />
    </>
  );
};

export const Task5 = ({ handleSetConditions, handleRemoveTask }) => {
  // you should use thirdTaskResult with value of 5 here
  const [bag, setBag] = useState([
    "simple apple",
    "pickle",
    "rock",
    "skissors",
    "notebook",
    "tomato",
    "branch",
    "Lego Kids",
  ]);

  const handleFindAnswer = () => {
    console.log(
      "remove from an array the tomato, and show the result to console!"
    );
  };

  return (
    <>
      <p>
        Hunters shocked, an apple dropped. You see one girl looking for
        something. Hunters running after you, you scream for a help..
        <br /> Kyz Zhibek says, Find <b style={{ fontSize: "20px" }}>
          tomato
        </b>{" "}
        from my bag with those items:
        <br /> (
        {bag.map((el) => (
          <>{el + ", "}</>
        ))}
        ) <br />
        and pretend it to be an apple. then drop to them, and run, when they
        will chase the rock instead. <br />
        task: [remove from an array the tomato]
      </p>
      <button
        className="button"
        style={{ bottom: "5%" }}
        onClick={handleFindAnswer}
      >
        Find Tomato
      </button>
    </>
  );
};

export const Task6 = ({ handleSetConditions, handleRemoveTask }) => {
  // you should use thirdTaskResult with value of 6 here

  return (
    <>
      <p>
        Hunters eating 1kg of apples. One is going to drop from their pockets.
        They see you and asks: what is a 1kg cost of an apples? If you will not
        answer correctly they are going to make you an apple... ans: 495tg
      </p>
      <input onChange={handleFindAnswer} />
    </>
  );
};
