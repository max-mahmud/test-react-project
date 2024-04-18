import React from "react";

const Childcom = ({ collbacker, todo }) => {
  console.log("child Render-----------");
  return (
    <div>
      {todo.map((ab, i) => {
        return (
          <>
            <div>{ab}</div>
          </>
        );
      })}
      <button onClick={() => collbacker()}>TODO</button>
    </div>
  );
};

export default React.memo(Childcom);
