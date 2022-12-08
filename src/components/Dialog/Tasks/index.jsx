import { useState, useEffect, useContext } from "react";
import { YggdrasilContext } from "../../../Context";

export const Task1 = () => {
  const { handleSetConditions, handleRemoveTask } =
    useContext(YggdrasilContext);

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

export const Task2 = () => {
  const { handleSetConditions, handleRemoveTask } =
    useContext(YggdrasilContext);
  // you should use secondTaskResult with value of 2 here

  const handleFindAnswer = (event) => {
    if (event.target.value === "495tg") {
      handleSetConditions("secondTaskResult", 2);
      handleRemoveTask();
    }
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

export const Task3 = () => {
  const { handleSetConditions, handleRemoveTask } =
    useContext(YggdrasilContext);
  //y ou should use secondTaskResult with value of 3 if left was picked, and 33 if right was picked

  const handleFindAnswer = (parameter) => {
    console.log("you should chose if its left jump or right...");
  };

  return (
    <>
      One girl is sitting on one of the branches, she says that she is Kyz
      Zhibek, and because of too long hairs she couldn't concentrate on some
      falling apples. <br /> Maybe you should look to the left branch, she heard
      some sounds with "apple" involved on them.. Or you might pick the right
      branch, cause, you know, why not. Anyway, she is going to join you in
      finding this interesting magic apple
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button className="button" style={{ bottom: "15%" }}>
          Pick left
        </button>
        <button className="button" style={{ bottom: "5%" }}>
          Pick right
        </button>
      </div>
    </>
  );
};

export const Task4 = () => {
  const { handleSetConditions, handleRemoveTask } =
    useContext(YggdrasilContext);
  // you should use secondTaskResult with value of 4 here
  const [currentJoke, setCurrentJoke] = useState(
    "Who is there? Interrupting dyslexic cow. Interrupting dysle-... OMO! "
  );

  const handleFindAnswer = (parameter) => {
    console.log("you should write a good bad joke here.");
  };

  return (
    <>
      <p>
        Bai with his fellas saw some bright apple came just from above.
        <br />
        After seeing you he said, if you hiding this apple somewhere give me, or
        I will tell you my worst knock-knock joke of all the time.
        <br />
        You start sweating after hearing that, and reply, what if I will tell
        you my worst joke, if mine beats yours, I will leave the apple with
        me(no idea where it is actually).
        <br />
        <b>Knock-knock: {currentJoke}</b>
      </p>
      <input className="button" style={{ bottom: "15%" }} />

      <button
        className="button"
        style={{ bottom: "5%" }}
        onChange={handleFindAnswer}
      >
        Drop the mic..
      </button>
    </>
  );
};

export const Task5 = () => {
  const {
    handleSetConditions,
    handleRemoveTask,
    conditions: { secondTaskResult },
  } = useContext(YggdrasilContext);
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
    const bagWithoutTomato = bag.filter((el) => el !== "tomato");

    setBag(bagWithoutTomato);
  };

  useEffect(() => {
    if (!bag.find((el) => el === "tomato")) {
      handleSetConditions("thirdTaskResult", 5);
      handleRemoveTask();
    }
  }, [bag]);

  return secondTaskResult === 2 ? (
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
  ) : (
    <>
      <p>
        You see how some hunter-looking guys are holding on their hands a bright
        apple. After making quick math calculations you are deciding to scream.
        And Kyz Zhibek screams as well. And not because she was getting your
        plan, but because it was horrible scream.Here is bag with some items,
        she says:
        <br /> (
        {bag.map((el) => (
          <>{el + ", "}</>
        ))}
        ) <br />. Try to throw them tomato instead of an apple. <br />
        While screaming you deciding to jump from the branch to the roots, to
        finally find an apple. Kyz Zhibek decides to drop a rocks to the hunters
        and jumps with you. <br />
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

export const Task6 = () => {
  const {
    handleSetConditions,
    handleRemoveTask,
    conditions: { thridTaskResult },
  } = useContext(YggdrasilContext);
  // you should use thirdTaskResult with value of 6 here
  const [jump, setJump] = useState("");

  const handleJump = (event) => {
    console.log(event.target.value);
  };

  const handleFindAnswer = () => {};

  useEffect(() => {
    if (jump) {
      handleFindAnswer();
    } else handleFindAnswer();
  }, [jump]);

  return (
    <>
      <p>
        All of you are now close to the roots. But who is going to jump first?
        <br />
        {thridTaskResult === 4
          ? "Bai's soldiers are afraid of jumping and deciding to push you first."
          : "You can see some soldiers with guy in the middle and thinking about jumping before they will see you"}
      </p>
      <div>
        <input
          type="radio"
          id="jump"
          name="jump"
          value="do"
          onChange={handleJump}
        />
        <label htmlFor="jump">JUMP!</label>
      </div>

      <div>
        <input
          type="radio"
          id="jump"
          name="jump"
          value="not"
          onChange={handleJump}
        />
        <label htmlFor="jump">NO JUMP! RESIST! FIGHT!</label>
      </div>
    </>
  );
};
