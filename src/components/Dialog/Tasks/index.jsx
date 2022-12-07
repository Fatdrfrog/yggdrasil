export const Task1 = ({ handleSetConditions }) => {
  const handleFindAnswer = (event) => {
    if (event.target.value === "495") {
      handleSetConditions("firstTaskResult", 1);
    }
  };

  return (
    <>
      <p>
        Hunters eating 1kg of apples. One is going to drop from their pockets.
        They see you and asks: what is a 1kg cost of an apples? If you will not
        answer correctly they are going to make you an apple... ans: 495tg
      </p>
      <select>
        <option>Hunters</option>
        <option></option>
      </select>
    </>
  );
};

export const Task2 = ({ handleSetConditions }) => {
  const handleFindAnswer = (event) => {
    if (event.target.value === "495") {
      handleSetConditions("firstTaskResult", 1);
    }
  };

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

export const Task3 = ({ handleSetConditions }) => {
  return (
    <>
      You see one girl, she says that she is Kyz Zhibek, and because of too long
      hairs she couldn't concentrate on some falling apples. May be you should
      look to the left branch, she heard some sounds with "apple" involved on
      them.. Or You might pick the right branch, cause, you know, why not.
      Anyway, she is going to join you in finding this interesting magic apple
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button>Pick left</button> <button>Pick right</button>
      </div>
    </>
  );
};

export const Task4 = ({ handleSetConditions }) => {
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

export const Task5 = ({ handleSetConditions }) => {
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

export const Task6 = ({ handleSetConditions }) => {
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
