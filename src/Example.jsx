import React from "react";

const Example = () => {
  const options = ["option1", "option2", "option3"];



  return <div>
    {
      options.map((item,i)=>(
        <span key={i}>
          <input type="checkbox" name="" id={i} />
          <label htmlFor={i}>{item}</label>
        </span>
      ))
    }
  </div>;
};

export default Example;
