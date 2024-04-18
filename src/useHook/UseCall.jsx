import React, { useState, useMemo, useCallback } from "react";
import Childcom from "./useHook/Childcom";

const UseCall = () => {
  const [add, setAdd] = useState(0);
  const [minus, setminus] = useState(100);
  const [todo, setToda] = useState([]);

  // const minimum = useMemo(() => {
  //   console.log("runn");
  //   return add * 10;
  // }, [add]);

  const collbacker = useCallback(() => {
    setToda((prev) => [...prev, "new todo"]);
  }, [todo]);

  return (
    <div>
      {/* <div>{minimum}</div> <br /> */}
      <div>
        <Childcom collbacker={collbacker} todo={todo} />
      </div>
      <span>{add}</span>
      <button onClick={() => setAdd((a) => a + 1)}>Add</button>
      <br />
      <br />
      <span>{minus}</span>
      <button onClick={() => setminus((a) => a - 1)}>Minus</button>
    </div>
  );
};

export default UseCall;
